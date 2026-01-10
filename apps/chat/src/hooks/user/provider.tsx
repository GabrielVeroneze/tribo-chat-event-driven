import { useEffect, useState } from 'react'
import { userContext } from './context'
import type { User } from '@/types/User'
import useChat from '@/hooks/chat'
import fetch from '@/config/fetchInstance'

interface UserProviderProps {
    children: React.ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [data, setData] = useState<User | null>(null)
    const { data: chatData } = useChat()

    useEffect(() => {
        if (!data || !chatData) return

        const currentChatIndex = data.chats.findIndex(
            (chat) => chat.id === chatData.id,
        )

        if (data.chats[currentChatIndex]?.unreadMessages > 0) {
            setData((oldData) => {
                if (!oldData) return oldData

                return {
                    ...oldData,
                    chats: oldData.chats.map((chat) => {
                        if (chat.id === chatData?.id) {
                            return { ...chat, unreadMessages: 0 }
                        }
                        return chat
                    }),
                }
            })

            fetch.post(`/api/chats/${chatData?.id}/readMessages`, {
                id: data.id,
            })
        }
    }, [data, chatData])

    return (
        <userContext.Provider value={{ data, setData }}>
            {children}
        </userContext.Provider>
    )
}
