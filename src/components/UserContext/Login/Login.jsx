import React, { useContext, useState } from 'react'
import { UserContext } from './../UserContext'
import { Link } from 'react-router-dom'

function Login() {
    const { login } = useContext(UserContext)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleUserChange = ({ target }) => {
        setUser(target.value)
    }

    const handlePasswordChange = ({ target }) => {
        setPassword(target.value)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <label>Nome de usuário</label>
            <input type="text" onChange={handleUserChange} />
            <label>Senha</label>
            <input type="password" onChange={handlePasswordChange} />
            <Link to="/conta-fake">
                <button onClick={() => login(user, password)}>Login</button>
            </Link>
        </div>
    )
}
export default Login
