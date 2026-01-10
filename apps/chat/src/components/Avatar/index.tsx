import { FaUser } from 'react-icons/fa'
import './styles.scss'

interface AvatarProps {
    image: string
}

const Avatar = ({ image }: AvatarProps) => {
    return (
        <div className="avatar-container">
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
