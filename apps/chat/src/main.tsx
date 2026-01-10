import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from '@/hooks/user/provider'
import { ConversaProvider } from '@/hooks/chat/provider'
import Router from '@/router'
import 'normalize.css'
import '@/styles/_variables.scss'
import '@/styles/_globals.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConversaProvider>
            <UserProvider>
                <Router />
            </UserProvider>
        </ConversaProvider>
    </StrictMode>,
)
