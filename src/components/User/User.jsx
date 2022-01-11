import React, { useContext } from 'react'
import { UserContext } from '../UserContext/UserContext'

export default function User() {
    const { user, password } = useContext(UserContext)
    
    return (
        <div>
            {password === '' && <p style={{ color: 'red' }}>Usuário não logado, tente novamente</p>}
            {password !== '' && <p style={{ color: 'green' }}>Usuário(a) {user} logado(a) com sucesso!</p>}
        </div>
    )
}
