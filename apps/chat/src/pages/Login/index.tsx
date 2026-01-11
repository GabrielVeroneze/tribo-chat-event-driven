import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { PiSignOut } from 'react-icons/pi'
import { login } from '@/store/user/userThunks'
import type { AppDispatch } from '@/store'
import fetch from '@/config/fetchInstance'
import Form from '@/components/Form'
import Input from '@/components/Input'

const Login = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = { email, password }

        return fetch
            .post('/api/users/login', data)
            .then((response) => {
                dispatch(login(response.data))
                return navigate('/')
            })
            .catch(() => alert('email ou senha incorretos!'))
    }

    return (
        <Form onSubmit={onSubmit} title="Login" buttonLabel="Entrar">
            <Input
                label="Email"
                type="email"
                id="email"
                required
                value={email}
                onChange={setEmail}
            />
            <Input
                label="Senha"
                type="password"
                id="password"
                required
                value={password}
                onChange={setPassword}
            />
            <div className="signup-login">
                <p>Não tem uma conta?</p>
                <Link to="/signup" className="signup-login-anchor">
                    Cadastre-se! <PiSignOut size={20} />
                </Link>
            </div>
        </Form>
    )
}

export default Login
