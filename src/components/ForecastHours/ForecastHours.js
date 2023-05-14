import styles from './ForecastHours.module.css';
import HourItems from './HourItems';

const ForecastHours = ({ items }) => {
    
    return (
        <div className={styles.forecastHoursWrapper}>
            <div className={styles.descriptionWrapper}>
                <h2 className={styles.description}>
                    Cloudy conditions from 1AM-9AM, with showers expected at
                    9AM.
                </h2>
            </div>
            <div className={styles.hoursWrapper}>
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
