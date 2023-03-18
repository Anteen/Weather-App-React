import '../../styles/Forecast-days.css'
import Day from './Day'

const ForecastDays = ({items}) => {
    return (
        <div className='forecast-days__wrapper' >
            <h1 className='forecast-days-title'>8-DAY FORECAST</h1>
            {items.map((item, index) => {
            return <Day key={index} items={items} {...item} />}) }
            <Day />
        </div>
    )
}
export default ForecastDays