import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './chat/chatSlice'
import userReducer from './user/userSlice'

export const store = configureStore({
    reducer: {
        chat: chatReducer,
        user: userReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
