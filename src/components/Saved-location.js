import '../styles/Saved-Location.css'
import '../styles/Container.css'
import VideoBackground from './Video-Background'

const SavedLocation = ({weather: {name, temp, details, dt}, items}) => {
    const [weatherArray] = items

    

    return (
        <div className="location-container">
            <VideoBackground description={details}/>
            <div className='location-wrapper'>
                <div className='location-description'>
                    <h1 className='location-title'>{name}</h1>
                    <p className='location-weather'>{details}</p>
                </div>
                <div className='location-degreeses'>
                    <h1 className='location-degree-title'>{Math.round(temp)}°</h1>
                    <h2 className='location-degree-subtitle'>H:{Math.round(weatherArray.tempMax)}°  L:{Math.round(weatherArray.tempMin)}°</h2>
                </div>
            </div>
        </div>
    )  
}

export default SavedLocation

