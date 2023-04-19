import { useState } from 'react'
import savedLocationStyles from '../styles/SavedLocation.module.css'
import sideBarStyles from '../styles/ContainerWithData.module.css'
import VideoBackground from './VideoBackground'

const MyLocation = ({ localWeather: {name, temp, details, daily}, setQuery, unactivateSidebar }) => {
    const [localWeatherArray] = daily;

    const handleCurrentLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
        unactivateSidebar(sideBarStyles.sidebarWrapper);
    };

    const [savedCardClass, setSavedCardClass] = useState(savedLocationStyles.locationContainer);
    const handleMouseEnter = () => {
        if (savedCardClass === savedLocationStyles.locationContainer) {
            setSavedCardClass(savedLocationStyles.locationContainerHovered);
        }
    };
    const handleMouseLeave = () => {
        if (savedCardClass === savedLocationStyles.locationContainerHovered) {
            setSavedCardClass(savedLocationStyles.locationContainer);
        }
    };

    return (
        <>
            <div
                onClick={handleCurrentLocationClick}
                className={savedCardClass}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <VideoBackground description={details} />
                <div className={savedLocationStyles.locationWrapper}>
                    <div className={savedLocationStyles.locationDescription}>
                        <h2 className={savedLocationStyles.locationTitle}>
                            My location
                        </h2>
                        <p className={savedLocationStyles.locationCity}>
                            {name}
                        </p>
                        <p className={savedLocationStyles.locationWeather}>
                            {details}
                        </p>
                    </div>
                    <div className={savedLocationStyles.locationDegreeses}>
                        <h2 className={savedLocationStyles.locationDegreeTitle}>
                            {Math.round(temp)}°
                        </h2>
                        <h2
                            className={
                                savedLocationStyles.locationDegreeSubtitle
                            }
                        >
                            H:{Math.round(localWeatherArray.tempMax)}° L:
                            {Math.round(localWeatherArray.tempMin)}°
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyLocation

