import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/types/User'

interface UserState {
    data: User | null
}

const initialState: UserState = {
    data: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.data = action.payload
        },
        clearUser(state) {
            state.data = null
        },
        clearUnreadMessages(state, action: PayloadAction<{ chatId: number }>) {
            if (!state.data) return

            state.data.chats = state.data.chats.map((chat) =>
                chat.id === action.payload.chatId
                    ? { ...chat, unreadMessages: 0 }
                    : chat,
            )
        },
    },
})

export const { setUser, clearUser, clearUnreadMessages } = userSlice.actions

export default userSlice.reducer
