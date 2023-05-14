import { useState } from 'react'
import styles from '../components/SavedLocation.module.css'
import sideBarStyles from './SideBar.module.css'
import VideoBackground from './VideoBackground'
import RemovingButton from '../assets/images/x-square.svg'

const SavedLocation = ({location: {name, temp, details, lat, lon, daily}, setQuery, unactivateSidebar}) => {
    
    const [dailyWeather] = daily;
    const [isVisible, setIsVisible] = useState(true)
    const [savedCardClass, setSavedCardClass] = useState(styles.locationContainer);
    const handleMouseEnter = () => {
        if (savedCardClass === styles.locationContainer) {
            setSavedCardClass(styles.locationContainerHovered);
        }
    };
    const handleMouseLeave = () => {
        if (savedCardClass === styles.locationContainerHovered) {
            setSavedCardClass(styles.locationContainer);
        }
    };

    const currentLocationClick = () => {
        setQuery({
            lat: lat,
            lon: lon,
        });
        unactivateSidebar(sideBarStyles.sidebarWrapper);
    };
    
    const removeCard = () => {
        const selectedCityCoords = { lat: lat.toString(), lon: lon.toString() };
        const items = JSON.parse(localStorage.getItem('savedLocationCoords')); 
        const updatedItems = items.filter((item) => JSON.stringify(selectedCityCoords) !== JSON.stringify(item))
        localStorage.setItem('savedLocationCoords', JSON.stringify(updatedItems))
        if (updatedItems) {
            setIsVisible(false)
        }
    }

    return (
        <>
            {isVisible && (
                <div
                    onClick={currentLocationClick}
                    className={savedCardClass}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className={styles.locationButton} onClick={(e) => { e.stopPropagation(); removeCard(); }}>
                        <img
                            src={RemovingButton}
                            className={styles.locationButtonImage}
                            alt='remove city'
                        />
                    </button>
                    <VideoBackground description={details} />
                    <div className={styles.locationWrapper}>
                        <div className={styles.locationDescription}>
                            <h2 className={styles.locationTitle}>{name}</h2>
                            <p className={styles.locationWeather}>{details}</p>
                        </div>
                        <div className={styles.locationDegreeses}>
                            <h2 className={styles.locationDegreeTitle}>
                                {Math.round(temp)}°
                            </h2>
                            <h2 className={styles.locationDegreeSubtitle}>
                                H:{Math.round(dailyWeather.tempMax)}° L:
                                {Math.round(dailyWeather.tempMin)}°
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SavedLocation

