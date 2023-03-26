import {useEffect, useState} from 'react'
import './App.css';
import Container from './components/ContainerWithData.js';
import Modal from './Modal';
import formatedWeatherData from './services/api';
import Preloader from './components/Preloader';


function App() {

  const [active, setActive] = useState(false)
  const handleOnSearchChange = (searchData) => {
    // console.log(searchData)
  }

  const [query, setQuery] = useState({lat: 48.85, lon: 2.35})
  const [localQuery, setLocalQuery] = useState({lat: 0, lon: 0})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  const [localWeather, setlocalWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (localQuery.lat === 0 & localQuery.lon === 0) {
      navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude
          let lon = position.coords.longitude
          
          setLocalQuery({
              lat,
              lon
          })
      })
    } 
  })


  useEffect(() => {
    const fetchWeather = async () => {
       await formatedWeatherData({...localQuery, units})
       .then(data => {
            setlocalWeather(data)
      })
      .finally(() => setLoading(false))
    }
    fetchWeather()  
  }, [localQuery, units])

  // let [localDaily] = localWeather.daily 
  useEffect(() => {
      const fetchWeather = async () => {
         await formatedWeatherData({...query, units})
         .then(data => {
            setWeather(data)
        })
        .finally(() => setLoading(false))
      }
      fetchWeather()
    }, [query, units])

    if (loading) {
      return (
         <Preloader />
      )
  }
  // console.log(localWeather)
  return (
    <div className="App">
          <Container setQuery={setQuery} weather={weather} openModal={setActive} localWeather={localWeather}/>
          <Modal open={active} onClose={() => setActive(false)} onSearchChange={handleOnSearchChange} setQuery={setQuery} units={units} setUnits={setUnits}/>
    </div>
  );
}

export default App;
