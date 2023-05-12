import styles from './ForecastDays.module.css';
import DayItems from './DayItems';

const ForecastDays = ({ items }) => {
    return (
        <div className={styles.forecastDaysWrapper}>
            <h2 className={styles.title}>8-DAY FORECAST</h2>
            {items.map((item, index) => {
                return <DayItems key={index} items={items} {...item} />;
            })}
            <DayItems />
        </div>
    );
};
export default ForecastDays;
