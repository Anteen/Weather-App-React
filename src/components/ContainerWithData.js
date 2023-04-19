import { useContext } from 'react'
import { Context } from '../context'
import styles from '../styles/ContainerWithData.module.css'
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
        <div className={styles.dataContainer}>
            <button
                className={styles.burgerButton}
                onClick={() => change(activeSidebarClass)}
            >
                {burgerButtonClass === styles.burgerButton ? (
                    <img
                        src={BurgerButton}
                        className={styles.burgerButtonSvg}
                    />
                ) : (
                    <img
                        src={CloseButton}
                        className={styles.burgerButtonSvg}
                    />
                )}
            </button>
            {weather && (
                <>
                    <VideoBackground description={weather.details} />
                    <main className={styles.mainInfo}>
                        <div className={styles.infoTableWrapper}>
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