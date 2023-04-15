import { useContext } from 'react'
import { Context } from '../context'
import '../styles/ContainerWithData.css'
import SideBar from './SideBar'
import Header from './Header'
import ForecastDays from './ForecastDays/ForecastDays'
import ForecastHours from './ForecastHours/ForecastHours'
import CardContainer from './WeatherCards/CardContainer'
import VideoBackground from './VideoBackground'
import burgerButton from '../assets/images/align-justify-svgrepo-com.svg'


const ContainerWithData = ({weather, localWeather, openModal, setQuery, activeSidebar, savedWeather}) => {
    
    const { change, adaptiveChange } = useContext(Context);

    return (
        <div className="Container">
            <button
                className="button-open-sidebar"
                onClick={() => change(activeSidebar)}
            >
                <img src={burgerButton} className="button-open-sidebar__svg" />
            </button>
            {weather && (
                <>
                    <VideoBackground description={weather.details} />
                    <main className="main-info">
                        <div className="info-table-wrapper">
                            <Header weather={weather} items={weather.daily} />
                            <ForecastDays items={weather.daily} />
                            <ForecastHours items={weather.hourly} />
                            <CardContainer weather={weather} />
                        </div>
                    </main>
                    <SideBar
                        setQuery={setQuery}
                        openModal={openModal}
                        localWeather={localWeather}
                        savedWeather={savedWeather}
                        activeSideBar={activeSidebar}
                        unactivateSidebar={() => adaptiveChange(activeSidebar)}
                    />
                </>
            )}
        </div>
    );
}


export default ContainerWithData