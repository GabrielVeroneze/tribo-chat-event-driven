import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { checkLogin } from '@/store/user/userThunks'
import type { AppDispatch } from '@/store'

export const useAuthGuard = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(checkLogin())
            .unwrap()
            .then((isLogged) => {
                if (!isLogged) {
                    navigate('/login')
                }
            })
    }, [dispatch, navigate])
}
