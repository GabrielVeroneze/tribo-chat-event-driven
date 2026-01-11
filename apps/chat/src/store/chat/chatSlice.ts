import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { UserChat } from '@/types/UserChat'

interface ChatState {
    data: UserChat | null
}

const initialState: ChatState = {
    data: null,
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        selectChat(state, action: PayloadAction<UserChat>) {
            state.data = action.payload
        },
        clearChat(state) {
            state.data = null
        },
    },
})

export const { selectChat, clearChat } = chatSlice.actions

export default chatSlice.reducer
