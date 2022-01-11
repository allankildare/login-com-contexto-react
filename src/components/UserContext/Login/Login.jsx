import React, { useContext, useState } from 'react'
import { UserContext } from './../UserContext'
import { Link } from 'react-router-dom'

function Login() {
    const { login } = useContext(UserContext)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleUserChange = (event) => {
        setUser(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    console.log(password)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <label>Nome de usuário</label>
            <input type="text" onChange={handleUserChange} />
            <label>Senha</label>
            <input type="password" onChange={handlePasswordChange} />
            <Link to="/conta">
                <button onClick={() => login(user, password)}>Login</button>
            </Link>
        </div>
    )
}
export default Login
