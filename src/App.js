import {useEffect, useState, useMemo, Component, useLayoutEffect} from 'react'
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

  const [units, setUnits] = useState('metric')
  const [localQuery, setLocalQuery] = useState(null)
  const [query, setQuery] = useState(defaultCity)
  const [localWeather, setlocalWeather] = useState({})
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [savedQuery, setSavedQuery] = useState(null)
  const [savedLocationArr, setSavedLocationArr] = useState(JSON.parse(localStorage.getItem('savedLocationArr')) || [])
  const [savedWeather, setSavedWeather] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {  
      navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          
          setLocalQuery({
              lat,
              lon
          })
      })
  }, [])

  // console.log(localQuery)

  useEffect(() => {
    if (localQuery !== null) {
      const fetchWeather = async () => {
      const data = await formatedWeatherData({...localQuery, units})
        setlocalWeather(data)
        setLoading(false)
        setQuery(localQuery)
      }
      fetchWeather()  
    }
  }, [localQuery])

  // console.log(localWeather)


  useEffect(() => {
      const fetchWeather = async () => {
      const data = await formatedWeatherData({...query, units})
        setWeather(data)
        setLoading(false)
      }
      fetchWeather()
    }, [query])

    useEffect (() =>  {
      const fetchWeather = async () => {
        const tempDataArr = []
        for (let i=0; i<savedLocationArr.length; i++) {
          const data = await formatedWeatherData({...savedLocationArr[i], units})
          tempDataArr.push(data)
        }
        setSavedWeather([...savedWeather, ...tempDataArr])
        setLoading(false)
      }
      fetchWeather()
    }, [savedLocationArr])
    
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
