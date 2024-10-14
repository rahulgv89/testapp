import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from './components/table'


const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()
  const [weatherforecastData, setWeatherforecastData] = useState([]);
  
    useEffect(() => {
      // Fetch data using fetch
      //fetch('https://jsonplaceholder.typicode.com/photos')
      // fetch('http://localhost:5062/api/weatherforecast')
      fetch('api/weatherforecast')
        .then(response => response.json())
        .then(data => setWeatherforecastData(data))
        .catch(error => console.error('Error fetching data:', error));
        },[]);

  return (
    <>
    {/* // <div>
    //   <div >
    //     <div>Welcome!</div>
    //   </div>
     
    //   <div><Table/></div>
    // </div> */}
   
    <div>
    <h1>API Data</h1>
    <div>
  
    {weatherforecastData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
    </div>
  </div>
  </>
  )
}
   export default Home