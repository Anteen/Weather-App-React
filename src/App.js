import {useEffect, useState} from 'react'
import { Context } from './context';
import './App.css';
import ContainerWithData from './components/ContainerWithData.js';
import Modal from './Modal';
import formatedWeatherData from './services/api';
import Preloader from './components/Preloader';

function App() {

  const [active, setActive] = useState(false)
  const [activeSidebar, setActiveSidebar] = useState('sidebar-wrapper')

  const change = () => {
    setActiveSidebar('sidebar-wrapper sidebar-wrapper_active')
  }
  const adaptiveChange = () => {
    if (activeSidebar === 'sidebar-wrapper sidebar-wrapper_active') {
      setActiveSidebar('sidebar-wrapper')
    }
  }
 
  let defaultCity = {lat: 48.85, lon: 2.35}

  const [query, setQuery] = useState(defaultCity)
  const [localQuery, setLocalQuery] = useState({lat: 0, lon: 0})
  const [savedQuery, setSavedQuery] = useState({lat: 0, lon: 0})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  const [savedLocationArr, setSavedLocationArr] = useState([])
  const [savedWeather, setSavedWeather] = useState([])
  const [city, setCity] = useState('')
  const [localWeather, setlocalWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (localQuery.lat === 0 & localQuery.lon === 0) {
      navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          
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
    
    useEffect(() => {
      savedLocationArr.forEach(coords => {
      setSavedQuery(coords)
      const fetchWeather = async () => {
           await formatedWeatherData({...savedQuery, units})
           .then(data => {
            setSavedWeather([...savedWeather, data])
          })
          .finally(() => setLoading(false))
        }
        fetchWeather()
      })
    }, [savedQuery, units, savedLocationArr])


    // console.log(savedLocationArr)
    // console.log(savedWeather)
    // console.log(savedQuery)
    
    if (loading) {
      return (
        <Preloader />
        )
  }
  return (
    <Context.Provider value={{
      change, adaptiveChange,
    }}>
      <div className="App">
            <ContainerWithData setQuery={setQuery} savedWeather={savedWeather} weather={weather} openModal={setActive} localWeather={localWeather} activeSidebar={activeSidebar} localQuery={localQuery} savedQuery={savedQuery} savedLocationArr={savedLocationArr}/>
            <Modal open={active} onClose={() => setActive(false)} setQuery={setQuery} activeSidebar={activeSidebar} city={city} setCity={setCity} savedQuery={savedQuery} setSavedQuery={setSavedQuery} savedLocationArr={savedLocationArr} setSavedLocationArr={setSavedLocationArr}/>
      </div>
    </Context.Provider>
  );
}

export default App;
