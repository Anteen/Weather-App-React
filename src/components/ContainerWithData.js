import { useContext } from 'react';
import { Context } from '../context';
import styles from './ContainerWithData.module.css';
import sidebarStyles from './SideBar.module.css' 
import SideBar from './SideBar';
import Header from './Header';
import ForecastDays from './ForecastDays/ForecastDays';
import ForecastHours from './ForecastHours/ForecastHours';
import Cards from './WeatherCards/Cards';
import VideoBackground from './VideoBackground';
import BurgerButton from '../assets/images/align-justify-svgrepo-com.svg';
import CloseButton from '../assets/images/x-circle-svgrepo-com.svg';

const ContainerWithData = ({
    weather,
    localWeather,
    openModal,
    setQuery,
    activeSidebarClass,
    savedCitiesWeather,
    onClose,
}) => {
    const { change, adaptiveChange } = useContext(Context);

    const closeModalAndSideBAr = () => {
        change(activeSidebarClass);
        onClose();
    };

    return (
        <div className={styles.dataContainer}>
            <button
                className={styles.burgerButton}
                onClick={closeModalAndSideBAr}
            >
                {activeSidebarClass === sidebarStyles.sidebarWrapper ? (
                    <img
                        src={BurgerButton}
                        className={styles.burgerButtonSvg}
                        alt="open menu"
                    />
                ) : (
                    <img
                        src={CloseButton}
                        className={styles.burgerButtonSvg}
                        alt="close menu"
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
                        activeSidebarClass={activeSidebarClass}
                        unactivateSidebar={() =>
                            adaptiveChange(activeSidebarClass)
                        }
                    />
                </>
            )}
        </div>
    );
};

export default ContainerWithData;
