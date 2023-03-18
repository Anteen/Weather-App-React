import '../../styles/Forecast-hours.css'
import Hours from './Hours'
import '../../styles/Day.css'


const ForecastHours = ({items}) => {
    return (
        <div className='forecast-hours__wrapper'>
            <div className='forecast-hours__description-wrapper'>
                <h2 className='forecast-hours__description'>Cloudy conditions from 1AM-9AM, with showers expected at 9AM.</h2>
                <hr className='day-wrapper__hr'/>
            </div>
            <div className='forecast-hours__hours-wrapper'>
                {items.map((item, index) => {
                    return (<Hours key={index} time={items.title} temp={items.temp} {...item}/>)
                })}
            </div>
        </div>
    )
}

export default ForecastHours