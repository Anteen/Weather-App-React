import { useState } from 'react'
import '../styles/SavedLocation.css'
import '../styles/ContainerWithData.css'
import VideoBackground from './VideoBackground'
import RemovingButton from '../assets/images/x-square.svg'

const SavedLocation = ({location: {name, temp, details, lat, lon, daily}, setQuery, unactivateSidebar}) => {
    
    const [dailyWeather] = daily;
    const [isVisible, setIsVisible] = useState(true)
    const [savedCardClass, setSavedCardClass] = useState('location-container');
    const handleMouseEnter = () => {
        if (savedCardClass === 'location-container') {
            setSavedCardClass('location-container-hovered');
        }
    };
    const handleMouseLeave = () => {
        if (savedCardClass === 'location-container-hovered') {
            setSavedCardClass('location-container');
        }
    };

    const currentLocationClick = () => {
        setQuery({
            lat: lat,
            lon: lon,
        });
        unactivateSidebar('sidebar-wrapper');
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
                    <button className="location-button" onClick={(e) => { e.stopPropagation(); removeCard(); }}>
                        <img
                            src={RemovingButton}
                            className="location-button-image"
                        />
                    </button>
                    <VideoBackground description={details} />
                    <div className="location-wrapper">
                        <div className="location-description">
                            <h2 className="location-title">{name}</h2>
                            <p className="location-weather">{details}</p>
                        </div>
                        <div className="location-degreeses">
                            <h2 className="location-degree-title">
                                {Math.round(temp)}°
                            </h2>
                            <h2 className="location-degree-subtitle">
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

