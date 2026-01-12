import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/types/User'
import type { Message } from '@/types/Message'

interface UserState {
    data: User | null
}

interface AddMessagePayload {
    senderId: number
    message: Message
}

interface clearMessagesPayload {
    chatId: number
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
        clearUnreadMessages(
            state,
            action: PayloadAction<clearMessagesPayload>,
        ) {
            if (!state.data) return

            state.data.chats = state.data.chats.map((chat) =>
                chat.id === action.payload.chatId
                    ? { ...chat, unreadMessages: 0 }
                    : chat,
            )
        },
        addMessageToChat(state, action: PayloadAction<AddMessagePayload>) {
            if (!state.data) return

            const { senderId, message } = action.payload

            state.data.chats.forEach((chat) => {
                if (!chat.participants.includes(senderId)) return

                if (!chat.messages) {
                    chat.messages = [message]
                } else {
                    chat.messages.push(message)
                }

                chat.unreadMessages += 1
            })
        },
    },
})

export const { setUser, clearUser, clearUnreadMessages, addMessageToChat } =
    userSlice.actions

export default userSlice.reducer
