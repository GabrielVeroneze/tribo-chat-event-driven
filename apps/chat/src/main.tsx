import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Router from '@/router'
import 'normalize.css'
import '@/styles/_variables.scss'
import '@/styles/_globals.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </StrictMode>,
)
