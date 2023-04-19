import Line from '../../assets/images/webp/dn-line.webp';
import styles from '../../styles/DayItems.module.css';
import { iconFromUrl } from '../../services/api';

const DayItems = (items) => {
    if (items.title === undefined || items.temp === undefined) {
        return null;
    } else {
        return (
            <div className={styles.dayItemWrapper}>
                <div className={styles.leftSide}>
                    <p className={styles.title}>{items.title}</p>
                    <img
                        src={iconFromUrl(items.icon)}
                        className={styles.weatherAppIcons}
                    />
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.nightTemp}>
                        {Math.round(items.tempNight)}°
                    </p>
                    <img src={Line} className={styles.line}></img>
                    <p className={styles.temp}>
                        {Math.round(items.tempDay)}°
                    </p>
                </div>
            </div>
        );
    }
};
export default DayItems;
