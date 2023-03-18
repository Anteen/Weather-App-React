import '../../styles/Card.css'
import RLine from '../../assets/images/rainbow-line.png' 
import SunMax from '../../assets/images/sun-max.png'
import Humidity from '../../assets/images/humidity.png'
import Sunrise from '../../assets/images/sunrise.png'
import FeelsLike from '../../assets/images/thermometer.png'
import Wind from '../../assets/images/wind.png'
import visibility from '../../assets/images/eye.png'
import sunriseVector from '../../assets/images/sunrise-vector.png'
import sunriseEllipse from '../../assets/images/Ellipse.png'
import Compas from '../../components/Compas'


const Card = ({weather}) => { 
    console.log(weather)
    const [hourly] = weather.hourly


    const timeConverter = () => {
        let timeData = weather.sunrise
        let onlyTime = timeData - 1641600000
        let h = Math.floor(onlyTime / 3600000) 
        let m = (onlyTime / 3600000).toFixed(4).split('')
        let removedHours = m.splice(0, 3).join('')
        m = Math.round(Number(`0.${m.join('')}`) * 60)
        let convertedTime = `${h}:${m}`
        return convertedTime
    }

    return (
        <>
            <div className="card-wrapper">
                <div className='card-wrapper__header'>
                    <img src={SunMax}/>
                    <p className='card-wrapper__title'>uv-index</p>
                </div>
                <h1 className='card-wrapper__degree'>12</h1>
                <h2 className='card-wrapper__subtitle'>Middle</h2>
                <img src={RLine} className='rainbow-line'/>
                <p className='card-wrapper__description'>Middle for the rest of the day.</p>
            </div>
            <div className="card-wrapper"> 
                <div className='card-wrapper__header'>
                <img src={Sunrise}/>
                <p className='card-wrapper__title'>sunrise</p>
                </div>
                <h1 className='card-wrapper__degree'>11:28 AM</h1>
                <div className='card-wrapper__img-wrapper'>
                    <img src={sunriseVector} className='sunrise-vector'/>
                    <img src={sunriseEllipse} className='sunrise-ellipse'/>
                </div>
                <p className='sunrise__subtitle'>Sunrise: {timeConverter()} AM</p>
            </div>
            <div className="card-wrapper">
                <div className='card-wrapper__header'>
                    <img src={Wind}/>
                    <p className='card-wrapper__title'>wind</p>
                </div>
                <div className='speed-wrapper'>
                    <Compas />
                    <div className='speed-text'>
                        <h2 className='speed-title'>{Math.round(weather.speed)}</h2> 
                        <p className='speed-subtitle'>m/s</p>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className='card-wrapper__header'>
                    <img src={FeelsLike}/>
                    <p className='card-wrapper__title'>feels like</p>
                </div>
                <h1 className='card-wrapper__degree'>{Math.round(weather.feels_like)}°</h1>
                <h3 className='card-wrapper__subtitle'>Similar to the actual temperature</h3>
            </div>
            <div className="card-wrapper">
                <div className='card-wrapper__header'>
                    <img src={Humidity}/>
                    <p className='card-wrapper__title'>humidity</p>
                </div>
                <h1 className='card-wrapper__degree'>{weather.humidity}%</h1>
                <p className='card-wrapper__description'>The dew point is {Math.round(hourly.dewPoint)}° right now.</p>
            </div> 
            <div className="card-wrapper">
                <div className='card-wrapper__header'>
                    <img src={visibility}/>
                    <p className='card-wrapper__title'>visibility</p>
                </div>
                <h1 className='card-wrapper__degree'>{weather.visibility / 1000} KM</h1>
                <h3 className='card-wrapper__subtitle'>Visibility is good</h3>
            </div>    
        </>               
    )
}

export default Card
