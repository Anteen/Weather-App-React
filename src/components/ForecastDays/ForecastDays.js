import '../../styles/ForecastDays.css';
import DayItems from './DayItems';

const ForecastDays = ({ items }) => {
    return (
        <div className="forecast-days__wrapper">
            <h2 className="forecast-days-title">8-DAY FORECAST</h2>
            {items.map((item, index) => {
                return <DayItems key={index} items={items} {...item} />;
            })}
            <DayItems />
        </div>
    );
};
export default ForecastDays;
