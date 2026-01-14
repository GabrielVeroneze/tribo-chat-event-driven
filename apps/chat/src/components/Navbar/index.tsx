import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { MdOutlineChat } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { logout } from '@/store/user/userThunks'
import type { AppDispatch } from '@/store'
import logo from '@/assets/logo.png'
import './styles.scss'

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const redirectHome = () => {
        navigate('/')
    }

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <nav className="navbar">
            <div className="navbar-list">
                <div className="navbar-logo" onClick={redirectHome}>
                    <img src={logo} alt="logo" />
                </div>
                <button className="navbar-list-item">
                    <MdOutlineChat size={22} />
                    <span>Chat</span>
                </button>
            </div>
            <div className="navbar-list-item" onClick={handleLogout}>
                <FiLogOut size={20} />
                Logout
            </div>
        </nav>
    )
}

export default Navbar
