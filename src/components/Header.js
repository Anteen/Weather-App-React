import styles from '../styles/Header.module.css';

const Header = ({ weather, items }) => {
    const [weatherArray] = items;

    return (
        <header className={styles.header}>
            <p className={styles.city}>{weather.name}</p>
            <p className={styles.degree}>{Math.round(weather.temp)}°</p>
            <p className={styles.weather}>{weather.details}</p>
            <p className={styles.dayAndNight}>
                H:{Math.round(weatherArray.tempMax)}° L:
                {Math.round(weatherArray.tempMin)}°
            </p>
        </header>
    );
};

export default Header;
