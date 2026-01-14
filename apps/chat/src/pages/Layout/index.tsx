import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import { useAuthGuard } from '@/hooks/useAuthGuard'
import { useSyncUnreadMessages } from '@/hooks/useSyncUnreadMessages'
import { useChatRooms } from '@/hooks/useChatRooms'
import { useChatSocketEvents } from '@/hooks/useChatSocketEvents'
import type { RootState } from '@/store'
import Navbar from '@/components/Navbar'
import './styles.scss'

const Layout = () => {
    const user = useSelector((state: RootState) => state.user.data)

    useAuthGuard()
    useSyncUnreadMessages()
    useChatRooms(user)
    useChatSocketEvents(user?.id)

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
