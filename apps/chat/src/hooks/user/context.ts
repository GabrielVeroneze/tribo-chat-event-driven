import { createContext, type Dispatch, type SetStateAction } from 'react'
import type { User } from '@/types/User'

interface UserContextType {
    data: User | null
    setData: Dispatch<SetStateAction<User | null>>
}

const defaultValues: UserContextType = {
    data: null,
    setData: () => {},
}

export const userContext = createContext<UserContextType>(defaultValues)
