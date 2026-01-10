import { useEffect, useState } from 'react'
import { matchFilter } from '@/utils/matchFilter'
import useChat from '@/hooks/chat'
import useUser from '@/hooks/user'
import CardChat from '@/components/CardChat'

interface DirectMessagesProps {
    filter: string
}

const DirectMessages = ({ filter }: DirectMessagesProps) => {
    const { data } = useUser()
    const { selectChat } = useChat()

    const chats = data?.chats

    const [messagesWithFilter, setMessagesWithFilter] = useState(chats)

    useEffect(() => {
        matchFilter({ filter, list: chats }, setMessagesWithFilter)
    }, [filter, chats])

    return (
        <div className="home-chat-mensagens-container">
            <h3 className="home-chat-mensagens-title">Mensagens Diretas</h3>
            <div className="home-chat-mensagens-list">
                {messagesWithFilter?.map((message, index) => (
                    <CardChat onClick={selectChat} key={index} {...message} />
                ))}
            </div>
        </div>
    )
}

export default DirectMessages
