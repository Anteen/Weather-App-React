import '../../styles/ForecastHours.css';
import HourItems from './HourItems';
import '../../styles/DayItems.css';

const ForecastHours = ({ items }) => {
    
    return (
        <div className="forecast-hours__wrapper">
            <div className="forecast-hours__description-wrapper">
                <h2 className="forecast-hours__description">
                    Cloudy conditions from 1AM-9AM, with showers expected at
                    9AM.
                </h2>
            </div>
            <div className="forecast-hours__hours-wrapper">
                {items.map((item, index) => {
                    return (
                        <HourItems
                            key={index}
                            time={items.title}
                            temp={items.temp}
                            icons={items.icon}
                            {...item}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ForecastHours;
