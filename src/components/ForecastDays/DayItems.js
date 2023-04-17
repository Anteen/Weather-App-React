import Line from '../../assets/images/webp/dn-line.webp';
import '../../styles/DayItems.css';
import { iconFromUrl } from '../../services/api';

const DayItems = (items) => {
    if (items.title === undefined || items.temp === undefined) {
        return null;
    } else {
        return (
            <div className="day-items-wrapper">
                <div className="day-items-wrapper__left-side">
                    <p className="day-items-title">{items.title}</p>
                    <img
                        src={iconFromUrl(items.icon)}
                        className="weather-app-icons"
                    />
                </div>
                <div className="day-items-wrapper__right-side">
                    <p className="day-items-wrapper__night-temp">
                        {Math.round(items.tempNight)}°
                    </p>
                    <img src={Line} className="day-items-wrapper__line"></img>
                    <p className="day-items-wrapper__day-items-temp">
                        {Math.round(items.tempDay)}°
                    </p>
                </div>
            </div>
        );
    }
};
export default DayItems;
