import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/types/User'
import type { Message } from '@/types/Message'

interface UserState {
    data: User | null
}

interface AddMessagePayload {
    chatId: number
    message: Message
}

interface clearMessagesPayload {
    chatId: number
}

interface UpdateChatStatusPayload {
    userId: number
    status: boolean
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

            const { chatId, message } = action.payload

            state.data.chats.forEach((chat) => {
                if (chat.id !== chatId) return

                if (!chat.messages) {
                    chat.messages = [message]
                } else {
                    chat.messages.push(message)
                }

                chat.unreadMessages += 1
            })
        },
        updateChatStatus(
            state,
            action: PayloadAction<UpdateChatStatusPayload>,
        ) {
            if (!state.data) return

            const { userId, status } = action.payload

            state.data.chats.forEach((chat) => {
                if (!chat.participants.includes(userId)) return

                chat.isLogged = status
            })
        },
    },
})

export const {
    setUser,
    clearUser,
    clearUnreadMessages,
    addMessageToChat,
    updateChatStatus,
} = userSlice.actions

export default userSlice.reducer
