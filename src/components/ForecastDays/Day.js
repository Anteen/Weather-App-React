import Line from '../../assets/images/webp/dn-line.webp'
import '../../styles/Day.css'
import { iconFromUrl } from '../../services/api'

const Day = (items) => {
    if (items.title === undefined || items.temp === undefined) {
        return null
    } else {
        return (
            <div className="day-wrapper">
                <div className="day-wrapper__left-side">
                    <p className="day-title">{items.title}</p>
                    <img src={iconFromUrl(items.icon)} className='weather-app-icons' />
                </div>
                <div className="day-wrapper__right-side">
                    {/* <p className="day-wrapper__night-temp"></p> */}
                    <img src={Line} className="day-wrapper__line"></img>
                    <p className="day-wrapper__day-temp">{Math.round(items.temp)}°</p>
                </div>
            </div>
        )

    }

}
export default Day