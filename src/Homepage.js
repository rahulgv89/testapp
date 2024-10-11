import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from './components/table'


const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  
    useEffect(() => {
      // Fetch data using fetch
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
        },[]);

  return (
    // <div>
    //   <div >
    //     <div>Welcome!</div>
    //   </div>
     
    //   <div><Table/></div>
    // </div>
    <div>
    <h1>API Data</h1>
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
  )
}
   export default Home