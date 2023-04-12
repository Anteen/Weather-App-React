import '../styles/SavedLocation.css'
import '../styles/Container.css'
import VideoBackground from './VideoBackground'


const SavedLocation = ({location: {name, temp, details, lat, lon, daily}, setQuery, unactivate}) => {
    
    const [weatherArray] = daily

    const currentLocationClick = () => {                
        setQuery({
            lat: lat,
            lon: lon,
        })
        unactivate('sidebar-wrapper')
    }
    return (
        <>
        <div onClick={currentLocationClick} className="location-container">
            <VideoBackground description={details}/>
            <div className='location-wrapper'>
                <div className='location-description'>
                    <h2 className='location-title'>{name}</h2>
                    <p className='location-weather'>{details}</p>
                </div>
                <div className='location-degreeses'>
                    <h2 className='location-degree-title'>{Math.round(temp)}°</h2>
                    <h2 className='location-degree-subtitle'>H:{Math.round(weatherArray.tempMax)}°  L:{Math.round(weatherArray.tempMin)}°</h2>
                </div>
            </div>
        </div>
        </>
    )  
}

export default SavedLocation

