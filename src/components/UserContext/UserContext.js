import React, { createContext, useState } from 'react'

export const UserContext = createContext(
    {
        user: '',
        password: ''
    }
)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const login = (user, password) => {
        setUser(user)
        if(password === 'feira_do_c#') setPassword(password)
    }

    return (
        <UserContext.Provider value={{ user, password, login }}>
            {children}            
        </UserContext.Provider>
    )
}