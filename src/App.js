import './App.css'
import User from './components/User/User'
import Login from './components/UserContext/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/conta-fake" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
