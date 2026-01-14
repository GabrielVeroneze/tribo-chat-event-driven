import { createAsyncThunk } from '@reduxjs/toolkit'
import { socket } from '@/config/socket'
import { setUser, clearUser } from './userSlice'
import type { User } from '@/types/User'
import fetch from '@/config/fetchInstance'

type CheckLoginResult = boolean

export const login = createAsyncThunk(
    'user/login',
    async (user: User, { dispatch }) => {
        const newUser = { ...user, isLogged: true }

        socket.emit('save-id', newUser.id)

        localStorage.setItem('user', JSON.stringify(newUser))
        dispatch(setUser(newUser))
    },
)

export const logout = createAsyncThunk(
    'user/logout',
    async (_, { dispatch, getState }) => {
        const state = getState() as { user: { data: User } }

        socket.emit('logoff', state.user.data.id)

        localStorage.removeItem('user')
        dispatch(clearUser())
    },
)

export const checkLogin = createAsyncThunk<CheckLoginResult>(
    'user/checkLogin',
    async (_, { dispatch, getState }) => {
        const state = getState() as { user: { data: User | null } }

        if (state.user.data?.id) {
            return true
        }

        const userStorage = localStorage.getItem('user')
        if (!userStorage) return false

        const storedUser = JSON.parse(userStorage)

        const response = await fetch.get(`/api/users/${storedUser.id}`)
        const newUser = {
            ...response.data,
            isLogged: true,
            fromStorage: true,
        }

        localStorage.setItem('user', JSON.stringify(newUser))
        dispatch(setUser(newUser))

        return true
    },
)
