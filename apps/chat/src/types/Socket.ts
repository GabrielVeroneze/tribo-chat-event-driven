import type { User } from '@/types/User'
import type { Message } from '@/types/Message'

export interface ServerToClientEvents {
    'new-message': (payload: {
        id: number
        chatId: number
        newMessage: Message
    }) => void
    'read-message': (user: User) => void
    'new-login': (userId: User['id']) => void
}

export interface ClientToServerEvents {
    'join-rooms': (chatIds: number[]) => void
}
