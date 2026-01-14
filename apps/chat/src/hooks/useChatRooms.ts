import { useEffect, useMemo } from 'react'
import { socket } from '@/config/socket'
import type { User } from '@/types/User'

export const useChatRooms = (user: User | null) => {
    const chatIds = useMemo(
        () => user?.chats.map((chat) => chat.id),
        [user?.chats],
    )

    useEffect(() => {
        if (chatIds) {
            socket.emit('join-rooms', chatIds)
        }
    }, [chatIds])
}
