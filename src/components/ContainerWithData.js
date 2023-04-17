import { useContext } from 'react'
import { Context } from '../context'
import '../styles/ContainerWithData.css'
import SideBar from './SideBar'
import Header from './Header'
import ForecastDays from './ForecastDays/ForecastDays'
import ForecastHours from './ForecastHours/ForecastHours'
import Cards from './WeatherCards/Cards'
import VideoBackground from './VideoBackground'
import BurgerButton from '../assets/images/align-justify-svgrepo-com.svg'
import CloseButton from '../assets/images/x-circle-svgrepo-com.svg'


const ContainerWithData = ({weather, localWeather, openModal, setQuery, activeSidebarClass, savedCitiesWeather, burgerButtonClass}) => {
    
    const { change, adaptiveChange } = useContext(Context);

    return (
        <div className="сontainer-with-data">
            <button
                className="button-open-sidebar"
                onClick={() => change(activeSidebarClass)}
            >
                {burgerButtonClass === 'button-open-sidebar' ? (
                    <img
                        src={BurgerButton}
                        className="button-open-sidebar__svg"
                    />
                ) : (
                    <img
                        src={CloseButton}
                        className="button-open-sidebar__svg"
                    />
                )}
            </button>
            {weather && (
                <>
                    <VideoBackground description={weather.details} />
                    <main className="main-info">
                        <div className="info-table-wrapper">
                            <Header weather={weather} items={weather.daily} />
                            <ForecastDays items={weather.daily} />
                            <ForecastHours items={weather.hourly} />
                            <Cards weather={weather} />
                        </div>
                    </main>
                    <SideBar
                        setQuery={setQuery}
                        openModal={openModal}
                        localWeather={localWeather}
                        savedCitiesWeather={savedCitiesWeather}
                        activeSideBarClass={activeSidebarClass}
                        unactivateSidebar={() => adaptiveChange(activeSidebarClass)}
                    />
                </>
            )}
        </div>
    );
}


export default ContainerWithData