import {useEffect, useState} from 'react'
import './App.css';
import Container from './components/ContainerWithData.js';
import Modal from './Modal';
import formatedWeatherData from './services/api';
import Preloader from './components/Preloader';


function App() {

  const [active, setActive] = useState(false)
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  const [query, setQuery] = useState({q: 'London'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  const [loading, setLoading] = useState(true)
  
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

  return (
    <div className="App">
          <Container setQuery={setQuery} weather={weather} openModal={setActive} />
          <Modal open={active} onClose={() => setActive(false)} onSearchChange={handleOnSearchChange} setQuery={setQuery} units={units} setUnits={setUnits}/>
    </div>
  );
}

export default App;
