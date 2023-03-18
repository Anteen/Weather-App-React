import {useEffect, useState} from 'react'
import '../styles/Container.css'
import SideBar from './SideBar'
import Header from './Header'
import ForecastDays from './Forecast-days/Forecast-days'
import ForecastHours from './Forecast-hours/Forecast-hours'
import CardContainer from './weather-cards/Card-container'
import formatedWeatherData from '../services/api'

import VideoBackground from './Video-Background'


const Container = () => {

    const [query, setQuery] = useState({q: 'Hannover'})
    const [units, setUnits] = useState('metric')
    const [weather, setWeather] = useState(null)
  


    useEffect(() => {
      const fetchWeather = async () => {
         await formatedWeatherData({...query, units})
         .then(data => {
            setWeather(data)
            // console.log(data.details)
         })
         
        //  console.log(backgroundVideo)

      }
      fetchWeather()
    }, [query, units])
    


    return (
        <div className="Container">
        {weather && (
            <>
            <VideoBackground description={weather.details}/>
            <div className='main-info'>
                <div className='info-table-wrapper'>
                    <Header weather={weather} items={weather.daily}/>
                    <ForecastDays items={weather.daily}/>
                    <ForecastHours items={weather.hourly}/>
                    <CardContainer weather={weather}/>
                </div>
            </div>
            <SideBar weather={weather} items={weather.daily}/>
            </>
        )}
        </div>
    )
}

export default Container