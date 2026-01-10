import type { UserChat } from '@/types/UserChat'

export interface User {
    id: number
    name: string
    email: string
    image: string
    isLogged: boolean
    chats: UserChat[]
}
