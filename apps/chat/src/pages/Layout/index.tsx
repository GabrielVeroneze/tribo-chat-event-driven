import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { checkLogin } from '@/store/user/userThunks'
import { socket } from '@/config/socket'
import { useSyncUnreadMessages } from '@/hooks/useSyncUnreadMessages'
import type { AppDispatch } from '@/store'
import Navbar from '@/components/Navbar'
import './styles.scss'

const Layout = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useSyncUnreadMessages()

    useEffect(() => {
        socket.connect()

        socket.on('new-message', (data) => {
            console.log('New message!', data)
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    useEffect(() => {
        dispatch(checkLogin())
            .unwrap()
            .then((isLogged) => {
                if (!isLogged) {
                    navigate('/login')
                }
            })
    }, [dispatch, navigate])

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
