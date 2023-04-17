import '../../styles/HourItems.css';
import { iconFromUrl } from '../../services/api';

const HourItems = ({ title, temp, icon }) => {
    title = title.split('');
    title.splice(2, 4);

    if (title[0] === '0') {
        title.splice(0, 1);
    }
    title = title.join('');

    return (
        <div className="hour-items-wrapper">
            <p className="hour-items-time">{title}</p>
            <img src={iconFromUrl(icon)} className="weather-app-icons" />
            <p className="hour-items-degree">{Math.round(temp)}°</p>
        </div>
    );
};

export default HourItems;
