import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUnreadMessages } from '@/store/user/userSlice'
import type { AppDispatch, RootState } from '@/store'
import fetch from '@/config/fetchInstance'

export const useSyncUnreadMessages = () => {
    const dispatch = useDispatch<AppDispatch>()
    const user = useSelector((state: RootState) => state.user.data)
    const chat = useSelector((state: RootState) => state.chat.data)

    useEffect(() => {
        if (!user || !chat) return

        const currentChat = user.chats.find(
            (userChat) => userChat.id === chat.id,
        )

        const unreadMessages = currentChat?.unreadMessages ?? 0

        if (unreadMessages > 0) {
            dispatch(clearUnreadMessages({ chatId: chat.id }))

            fetch.post(`/api/chats/${chat.id}/readMessages`, {
                id: user.id,
            })
        }
    }, [user, chat, dispatch])
}
