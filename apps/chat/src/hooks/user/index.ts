import { useCallback, useContext } from 'react'
import { userContext } from './context'
import fetch from '@/config/fetchInstance'
import type { User } from '@/types/User'

type CheckLoginCallback = (isLogged: boolean) => void

const useUser = () => {
    const { data, setData } = useContext(userContext)

    function login(user: User) {
        const newUser = { ...user, isLogged: true }
        localStorage.setItem('user', JSON.stringify(newUser))
        setData({ ...user, isLogged: true })
    }

    const checkLogin = useCallback(
        (callback: CheckLoginCallback) => {
            const userStorage = localStorage.getItem('user')

            const user = userStorage
                ? { ...JSON.parse(userStorage), fromStorage: true }
                : null

            if (data?.id) {
                callback(true)
                return
            }

            if (!data?.id && user) {
                fetch.get(`/api/users/${user.id}`).then((response) => {
                    const newUser = { ...response.data, isLogged: true }
                    localStorage.setItem('user', JSON.stringify(newUser))
                    setData(newUser)
                    callback(true)
                })
                return
            }

            callback(false)
        },
        [data?.id, setData],
    )

    function logout() {
        localStorage.removeItem('user')
        setData(null)
    }

    return {
        data,
        setData,
        login,
        logout,
        checkLogin,
    }
}

export default useUser
