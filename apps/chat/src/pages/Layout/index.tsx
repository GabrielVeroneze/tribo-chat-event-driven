import { useEffect, useMemo } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addMessageToChat } from '@/store/user/userSlice'
import { checkLogin } from '@/store/user/userThunks'
import { socket } from '@/config/socket'
import { useSyncUnreadMessages } from '@/hooks/useSyncUnreadMessages'
import type { AppDispatch, RootState } from '@/store'
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

    useSyncUnreadMessages()

    useEffect(() => {
        if (chatIds) {
            socket.emit('join-rooms', chatIds)
        }
    }, [chatIds])

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
        dispatch(checkLogin())
            .unwrap()
            .then((isLogged) => {
                if (!isLogged) {
                    navigate('/login')
                }
            })
    }, [dispatch, navigate])

    useEffect(() => {
        if (user?.id) {
            socket.on('new-login', (id) => {
                if (id !== user.id) {
                    console.log('novo id!', id)
                }
            })
        }

        return () => {
            socket.off('new-login')
        }
    }, [user?.id])

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
