import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setLoggedIn, setEmail}) => {
  const [email, setEmailaddress] = useState('')
  const [password, setPassword] = useState('')


  const navigate = useNavigate()

  const onButtonClick = () => {

    setEmail(email);
    setLoggedIn(true)
    navigate('/home')
  }

  return (
    <div>
      <div>
        <div className="login-header">Login</div>
      </div>
      <br />
      <div >
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmailaddress(ev.target.value)}
        />
      </div>
      <br />
      <div>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
        />
      </div>
      <br />
      <div>
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
      </div>
      <h1>{email}</h1>
    </div>

   
  )
  {console.log({email},'.......')}
}

export default Login