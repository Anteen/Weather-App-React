import Sunny from '../../assets/images/sunny.png'
import Line from '../../assets/images/dn-line.png'
import '../../styles/Day.css'

const Day = (items) => {
    
    if (items.title === undefined || items.temp === undefined) {
        return null
    } else {
        return (
            <div className="day-wrapper">
                <div className="day-wrapper__left-side">
                    <p className="day-title">{items.title}</p>
                    <img src={Sunny}></img>
                </div>
                <div className="day-wrapper__right-side">
                    <p className="day-wrapper__night-temp"></p>
                    <img src={Line} className="day-wrapper__line"></img>
                    <p className="day-wrapper__day-temp">{Math.round(items.temp)}°</p>
                </div>
                <hr className='day-wrapper__hr'/>
            </div>
        )

    }

}
export default Day