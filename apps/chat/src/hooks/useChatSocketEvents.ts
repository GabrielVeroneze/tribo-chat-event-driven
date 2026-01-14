import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { socket } from '@/config/socket'
import { addMessageToChat, updateChatStatus } from '@/store/user/userSlice'
import type { AppDispatch } from '@/store'

export const useChatSocketEvents = (userId?: number) => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        socket.connect()

        socket.on('new-message', (payload) => {
            dispatch(
                addMessageToChat({
                    chatId: payload.chatId,
                    message: payload.newMessage,
                }),
            )
        })

        return () => {
            socket.off('new-message')
            socket.disconnect()
        }
    }, [dispatch])

    useEffect(() => {
        if (!userId) return

        socket.on('new-login', (id) => {
            if (id !== userId) {
                dispatch(updateChatStatus({ userId: id, status: true }))
            }
        })

        socket.on('user-logoff', (id) => {
            dispatch(updateChatStatus({ userId: id, status: false }))
        })

        return () => {
            socket.off('new-login')
            socket.off('user-logoff')
        }
    }, [userId, dispatch])
}
