import type { Message } from '@/types/Message'

export interface Chat {
    id: number
    type: 'chat'
    participants: number[]
    messages: Message[]
}
