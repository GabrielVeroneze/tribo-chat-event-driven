import { MdOutlineChat } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import logo from '@/assets/logo.png'

interface NavBarProps {
    redirectHome: () => void
    logout: () => void
}

const Navbar = ({ redirectHome, logout }: NavBarProps) => {
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
            <div className="navbar-list-item" onClick={logout}>
                <FiLogOut size={20} />
                Logout
            </div>
        </nav>
    )
}

export default Navbar
