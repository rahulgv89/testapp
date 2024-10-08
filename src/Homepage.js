import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from './components/table'

const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()


  return (
    <div>
      <div >
        <div>Welcome!</div>
      </div>
     
      <div><Table/></div>
    </div>
  )
}
   export default Home