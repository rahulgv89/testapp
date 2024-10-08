import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Homepage'
import './App.css'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/home" element={<Home email={email} loggedIn={loggedIn}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App