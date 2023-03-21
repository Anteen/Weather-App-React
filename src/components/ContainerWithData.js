import {useEffect, useState} from 'react'
import '../styles/Container.css'
import SideBar from './SideBar'
import Header from './Header'
import ForecastDays from './ForecastDays/ForecastDays'
import ForecastHours from './ForecastHours/ForecastHours'
import CardContainer from './WeatherCards/CardContainer'
import VideoBackground from './VideoBackground'
import burgerButton from '../assets/images/align-justify-svgrepo-com.svg'


const Container = ({weather, openModal, setQuery}) => {
    
    const [activeSidebar, setActiveSidebar] = useState('sidebar-wrapper')
    const change = () => {
        setActiveSidebar('sidebar-wrapper sidebar-wrapper_active')
    }
    
    return (
        <div className="Container">
            <button className='button-open-sidebar' onClick={change}>
                <img src={burgerButton} className='button-open-sidebar__svg'/>
            </button>
        {weather && (
            <>
                <VideoBackground description={weather.details}/>
                <main className='main-info'>
                    <div className='info-table-wrapper'>
                        <Header weather={weather} items={weather.daily}/>
                        <ForecastDays items={weather.daily}/>
                        <ForecastHours items={weather.hourly}/>
                        <CardContainer weather={weather}/>
                    </div>
                </main>
                <SideBar setQuery={setQuery} openModal={openModal} weather={weather} items={weather.daily} activate={activeSidebar} unactivate={setActiveSidebar}/>
            </>
        )}
        </div>
    )
}

export default Container