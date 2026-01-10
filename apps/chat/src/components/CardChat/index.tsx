import type { UserChat } from '@/types/UserChat'
import type { Message } from '@/types/Message'
import Avatar from '@/components/Avatar'
import './styles.scss'

interface CardChatProps extends UserChat {
    date?: string
    messages?: Message[]
    onClick?: (chat: CardChatProps) => void
}

const CardChat = ({
    name,
    date,
    unreadMessages,
    messages = [],
    image,
    onClick,
    ...props
}: CardChatProps) => {
    const text = messages[messages.length - 1]?.text

    const selecionar = () => {
        onClick?.({
            name,
            date,
            unreadMessages,
            messages,
            image,
            ...props,
        })
    }

    return (
        <div className="cardChat-container" onClick={selecionar}>
            <div className="cardChat-container-image">
                <Avatar image={image} />
            </div>
            <div className="cardChat-container-list">
                <div className="cardChat-content">
                    <h4 className="cardChat-content-nome">{name}</h4>
                    <div className="cardChat-content-mensagem">{text}</div>
                </div>
                <div className="cardChat-metadata">
                    <span className="cardChat-metadata-data">{date}</span>
                    {!!unreadMessages && (
                        <div className="cardChat-metadata-mensagens-nao-lidas">
                            {unreadMessages}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardChat
