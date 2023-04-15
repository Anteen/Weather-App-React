import '../styles/SavedLocation.css'
import '../styles/ContainerWithData.css'
import VideoBackground from './VideoBackground'

const MyLocation = ({ localWeather: {name, temp, details, daily}, setQuery, unactivateSidebar }) => {
    const [localWeatherArray] = daily;

    const currentLocationClick = () => {
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
        unactivateSidebar('sidebar-wrapper');
    };

    return (
        <>
            <div onClick={currentLocationClick} className="location-container">
                <VideoBackground description={details} />
                <div className="location-wrapper">
                    <div className="location-description">
                        <h2 className="location-title">My location</h2>
                        <p className="location-city">{name}</p>
                        <p className="location-weather">{details}</p>
                    </div>
                    <div className="location-degreeses">
                        <h2 className="location-degree-title">
                            {Math.round(temp)}°
                        </h2>
                        <h2 className="location-degree-subtitle">
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

