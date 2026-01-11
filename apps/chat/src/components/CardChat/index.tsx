import { useDispatch } from 'react-redux'
import { selectChat } from '@/store/chat/chatSlice'
import type { UserChat } from '@/types/UserChat'
import Avatar from '@/components/Avatar'
import './styles.scss'

interface CardChatProps {
    chat: UserChat
}

const CardChat = ({ chat }: CardChatProps) => {
    const dispatch = useDispatch()

    const text = chat.messages?.[chat.messages.length - 1].text

    const selecionar = () => {
        dispatch(selectChat(chat))
    }

    return (
        <div className="cardChat-container" onClick={selecionar}>
            <div className="cardChat-container-image">
                <Avatar image={chat.image} />
            </div>
            <div className="cardChat-container-list">
                <div className="cardChat-content">
                    <h4 className="cardChat-content-nome">{chat.name}</h4>
                    <div className="cardChat-content-mensagem">{text}</div>
                </div>
                <div className="cardChat-metadata">
                    {!!chat.unreadMessages && (
                        <div className="cardChat-metadata-mensagens-nao-lidas">
                            {chat.unreadMessages}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardChat
