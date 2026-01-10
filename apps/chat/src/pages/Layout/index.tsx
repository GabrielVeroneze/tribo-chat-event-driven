import { Outlet, useNavigate } from 'react-router'
import { useEffect } from 'react'
import useUser from '@/hooks/user'
import Navbar from '@/components/Navbar'
import './styles.scss'

const Layout = () => {
    const { logout, checkLogin } = useUser()
    const navigate = useNavigate()

    const redirectHome = () => {
        navigate('/')
    }

    useEffect(() => {
        checkLogin((isLogged) => !isLogged && navigate('/login'))
    }, [checkLogin, navigate])

    return (
        <main className="container">
            <Navbar logout={logout} redirectHome={redirectHome} />
            <div className="content">
                <Outlet />
            </div>
        </main>
    )
}

export default Layout
