import { useContext, useEffect } from 'react'
import { conversaContext } from './context'
import { isEsc } from '@/utils/checkKeys'
import type { UserChat } from '@/types/UserChat'

const useChat = () => {
    const { data, setData } = useContext(conversaContext)

    useEffect(() => {
        const clearChat = () => setData(null)
        const handler = isEsc(clearChat)

        document.addEventListener('keydown', handler)

        return () => document.removeEventListener('keydown', handler)
    }, [setData])

    const selectChat = (novaConversa: UserChat) => {
        setData(novaConversa)
    }

    return { data, setData, selectChat }
}

export default useChat
