import type { Message } from '@/types/Message'

export interface UserChat {
    id: number
    name: string
    image: string
    type: 'chat'
    participants: number[]
    unreadMessages: number
    isLogged: boolean
    messages?: Message[]
}
