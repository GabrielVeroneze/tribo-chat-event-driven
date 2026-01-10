import { useState } from 'react'
import { conversaContext } from './context'
import type { UserChat } from '@/types/UserChat'

interface ConversaProviderProps {
    children: React.ReactNode
}

export const ConversaProvider = ({ children }: ConversaProviderProps) => {
    const [data, setData] = useState<UserChat | null>(null)

    return (
        <conversaContext.Provider value={{ data, setData }}>
            {children}
        </conversaContext.Provider>
    )
}
