import styles from '../../styles/HourItems.module.css';
import { iconFromUrl } from '../../services/api';

const HourItems = ({ title, temp, icon }) => {
    title = title.split('');
    title.splice(2, 4);

    if (title[0] === '0') {
        title.splice(0, 1);
    }
    title = title.join('');

    return (
        <div className={styles.hourItemsWrapper}>
            <p className={styles.time}>{title}</p>
            <img src={iconFromUrl(icon)} className={styles.weatherAppIcons} />
            <p className={styles.degree}>{Math.round(temp)}°</p>
        </div>
    );
};

export default HourItems;
