import { FaUser } from 'react-icons/fa'
import './styles.scss'

interface AvatarProps {
    image: string
    isLogged: boolean
}

const Avatar = ({ image, isLogged }: AvatarProps) => {
    return (
        <div
            className={`
                avatar-container
                avatar-container--${isLogged ? 'online' : 'offline'}
            `}
        >
            {image ? (
                <div className="avatar-image">
                    <img src={image} alt="avatar" />
                </div>
            ) : (
                <FaUser size={20} />
            )}
        </div>
    )
}

export default Avatar
