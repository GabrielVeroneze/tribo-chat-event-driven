import { createContext, type Dispatch, type SetStateAction } from 'react'
import type { UserChat } from '@/types/UserChat'

interface ConversaContextType {
    data: UserChat | null
    setData: Dispatch<SetStateAction<UserChat | null>>
}

const defaultValues: ConversaContextType = {
    data: null,
    setData: () => {},
}

export const conversaContext = createContext<ConversaContextType>(defaultValues)
