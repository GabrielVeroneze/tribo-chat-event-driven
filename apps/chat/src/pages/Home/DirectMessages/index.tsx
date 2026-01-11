import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { matchFilter } from '@/utils/matchFilter'
import type { RootState } from '@/store'
import CardChat from '@/components/CardChat'

interface DirectMessagesProps {
    filter: string
}

const DirectMessages = ({ filter }: DirectMessagesProps) => {
    const user = useSelector((state: RootState) => state.user.data)
    const chats = user?.chats

    const [messagesWithFilter, setMessagesWithFilter] = useState(chats)

    useEffect(() => {
        matchFilter({ filter, list: chats }, setMessagesWithFilter)
    }, [filter, chats])

    return (
        <div className="home-chat-mensagens-container">
            <h3 className="home-chat-mensagens-title">Mensagens Diretas</h3>
            <div className="home-chat-mensagens-list">
                {messagesWithFilter?.map((message, index) => (
                    <CardChat key={index} chat={message} />
                ))}
            </div>
        </div>
    )
}

export default DirectMessages
