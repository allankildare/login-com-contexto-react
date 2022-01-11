import React, { createContext, useState } from 'react'
import { users } from './users'

export const UserContext = createContext(
    {
        user: '',
        password: '',
        error: false
    }
)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [error, setError] = useState(false)
    
    const searchUser = (username) => users.find(item => item.username === username)
    
    const validatePassword = (username, password) => {
        const loginUser = users.find(item => item.username === username)
        if(loginUser.password === password) return true
        return false
    }

    const login = (username, password) => {
        const isValidUser = searchUser(username)
        if(Boolean(isValidUser)) setUser(username)
        else setError(true)
        
        const isCorrectPassword = validatePassword(user, password)
        if(!isCorrectPassword) setError(true)
        else setError(false)
    }

    return (
        <UserContext.Provider value={{ user, error, login }}>
            {children}            
        </UserContext.Provider>
    )
}