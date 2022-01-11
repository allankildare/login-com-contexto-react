import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext/UserContext'
import style from './User.module.css'

export default function User() {
    const { user, error } = useContext(UserContext)
    const ifError = error === true || !user
    
    return (
        <div>
            {ifError ? (
                <p style={{ color: 'red' }}>Usuário não logado, tente novamente</p>
            ) : (
                <p style={{ color: 'green' }}>Usuário(a) {user} logado(a) com sucesso!</p>
            )}
            <Link className={style.backToLogin} to="/">◄ Voltar para Login</Link>
        </div>
    )
}
