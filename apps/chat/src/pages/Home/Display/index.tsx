import { useEffect, useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { isEnter } from '@/utils/checkKeys'
import fetch from '@/config/fetchInstance'
import useConversa from '@/hooks/chat'
import useUser from '@/hooks/user'
import Avatar from '@/components/Avatar'
import displayEmpty from '@/assets/display-empty.png'
import './styles.scss'
import type { SendMessagePayload } from '@/types/SendMessagePayload'

const Display = () => {
    const { data: conversa } = useConversa()
    const { data: user } = useUser()
    const [newMessageText, setNewMessageText] = useState('')
    const [messages, setMessages] = useState(conversa?.messages)

    useEffect(() => {
        setMessages(conversa?.messages)
    }, [conversa?.messages])

    function verDetalhes() {
        alert('Esta função ainda não existe, sinta-se à vontade para criar!')
    }

    function sendMessage() {
        if (!user || !conversa || !newMessageText.trim()) return

        const otherUserId = conversa.participants.find(
            (participantId) => participantId !== user.id,
        )

        if (!otherUserId) return

        const newMessage: SendMessagePayload = {
            userId: user?.id,
            text: newMessageText,
            otherUserId: otherUserId,
            name: user.name,
            date: new Intl.DateTimeFormat('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
            }).format(new Date()),
        }

        setMessages((oldMessages = []) => [...oldMessages, newMessage])

        fetch.post(`/api/chats/${conversa?.id}/messages`, newMessage)

        setNewMessageText('')
    }

    if (!conversa) {
        return (
            <div className="display">
                <div className="display-empty">
                    <p>
                        Você ainda não selecionou uma conversa! <br /> Selecione
                        uma conversa para começar!
                    </p>
                    <img src={displayEmpty} alt="bate-papo" />
                </div>
            </div>
        )
    }

    return (
        <div className="display">
            <div className="display-header">
                <div className="display-header-content">
                    <Avatar image={conversa.image} />
                    <div className="display-header-content-nome">
                        <h2>{conversa.name}</h2>
                        <span onClick={verDetalhes}>
                            Clique para ver detalhes do contato
                        </span>
                    </div>
                </div>
            </div>
            <div className="display-messages">
                {messages?.map((message, index) => {
                    const actualMessageOwner =
                        message.userId === user?.id ? 'owner' : 'foreign'

                    return (
                        <div
                            key={index}
                            className={`display-messages-item display-messages-item--${actualMessageOwner}`}
                        >
                            <span className="display-messages-item-name">
                                {message.name}
                            </span>
                            <span>{message.text}</span>
                            <span className="display-messages-item-date">
                                {message.date}
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className="display-input">
                <input
                    className="display-input-element"
                    placeholder="Digite sua mensagem"
                    value={newMessageText}
                    onChange={(event) => setNewMessageText(event.target.value)}
                    onKeyDown={isEnter(sendMessage)}
                />
                <button className="display-input-button" onClick={sendMessage}>
                    <IoSend size={16} />
                </button>
            </div>
        </div>
    )
}

export default Display
