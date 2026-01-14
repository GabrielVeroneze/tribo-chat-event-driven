import { useEffect, useMemo } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addMessageToChat, updateChatStatus } from '@/store/user/userSlice'
import { checkLogin } from '@/store/user/userThunks'
import { socket } from '@/config/socket'
import { useAuthGuard } from '@/hooks/useAuthGuard'
import { useSyncUnreadMessages } from '@/hooks/useSyncUnreadMessages'
import type { AppDispatch, RootState } from '@/store'
import { useChatRooms } from '@/hooks/useChatRooms'
import Navbar from '@/components/Navbar'
import './styles.scss'

const Layout = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const user = useSelector((state: RootState) => state.user.data)

    const chatIds = useMemo(
        () => user?.chats.map((chat) => chat.id),
        [user?.chats],
    )

    useAuthGuard()
    useSyncUnreadMessages()

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
        if (user?.id) {
            socket.on('new-login', (id) => {
                if (id !== user.id) {
                    dispatch(updateChatStatus({ userId: id, status: true }))
                }
            })

            socket.on('user-logoff', (id) => {
                dispatch(updateChatStatus({ userId: id, status: false }))
            })
        }

        return () => {
            socket.off('new-login')
            socket.off('user-logoff')
        }
    }, [user?.id, dispatch])
    useChatRooms(user)

    return (
        <main className="container">
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
        </main>
    )
}

export default Layout
