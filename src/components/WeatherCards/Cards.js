// import '../../styles/Cards.css';
import styles from './Cards.module.css'
import RLine from '../../assets/images/webp/rainbow-line.webp';
import SunMax from '../../assets/images/webp/sun-max.webp';
import Humidity from '../../assets/images/webp/humidity.webp';
import Sunrise from '../../assets/images/webp/sunrise.webp';
import FeelsLike from '../../assets/images/webp/thermometer.webp';
import Wind from '../../assets/images/webp/wind.webp';
import visibility from '../../assets/images/webp/eye.webp';
import sunriseVector from '../../assets/images/webp/sunrise-vector.webp';
import sunriseEllipse from '../../assets/images/webp/ellipse.webp';
import Compas from '../../assets/images/webp/compas.webp';

const Cards = ({ weather }) => {
    const [hourly] = weather.hourly;

    const timeConverter = () => {
        let timeData = weather.sunrise;
        let onlyTime = timeData - 1641600000;
        let h = Math.floor(onlyTime / 3600000);
        let m = (onlyTime / 3600000).toFixed(4).split('');
        let removedHours = m.splice(0, 3).join('');
        m = Math.round(Number(`0.${m.join('')}`) * 60);
        const convertedTime = `${h}:${m}`;
        return convertedTime;
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardWrapper}>
                <div className={styles.header}>
                    <img src={SunMax} alt='sunMax'/>
                    <p className={styles.title}>uv-index</p>
                </div>
                <p className={styles.degree}>12</p>
                <p className={styles.subtitle}>Middle</p>
                <img src={RLine} className={styles.rainbowLine} alt='rainbowLine'/>
                <p className={styles.description}>
                    Middle for the rest of the day.
                </p>
            </div>
            <div className={styles.cardWrapper}>
                <div className={styles.header}>
                    <img src={Sunrise} alt='sunrise'/>
                    <p className={styles.title}>sunrise</p>
                </div>
                <p className={styles.degree}>11:28 AM</p>
                <div className={styles.imgWrapper}>
                    <img src={sunriseVector} className={styles.sunriseVector} alt='sunrise'/>
                    <img src={sunriseEllipse} className={styles.sunriseEllipse} alt='sunrise'/>
                </div>
                <p className={styles.description}>
                    Sunrise: {timeConverter()} AM
                </p>
            </div>
            <div className={styles.cardWrapper}>
                <div className={styles.header}>
                    <img src={Wind} alt='Wind'/>
                    <p className={styles.title}>wind</p>
                </div>
                <div className={styles.speedWrapper}>
                    <img src={Compas} className={styles.compasWrapper} alt='Compas'/>
                    <div className={styles.speedText}>
                        <p className={styles.speedTitle}>
                            {Math.round(weather.speed)}
                        </p>
                        <p className={styles.speedSubtitle}>m/s</p>
                    </div>
                </div>
            </div>
            <div className={styles.cardWrapper}>
                <div className={styles.header}>
                    <img src={FeelsLike} alt='FeelsLike'/>
                    <p className={styles.title}>feels like</p>
                </div>
                <p className={styles.degree}>
                    {Math.round(weather.feels_like)}°
                </p>
                <h3 className={styles.description}>
                    Similar to the actual temperature
                </h3>
            </div>
            <div className={styles.cardWrapper}>
                <div className={styles.header}>
                    <img src={Humidity} alt='Humidity'/>
                    <p className={styles.title}>humidity</p>
                </div>
                <p className={styles.degree}>{weather.humidity}%</p>
                <p className={styles.description}>
                    The dew point is {Math.round(hourly.dewPoint)}° right now.
                </p>
            </div>
            <div className={styles.cardWrapper}>
                <div className={styles.header}>
                    <img src={visibility} alt='visibility'/>
                    <p className={styles.title}>visibility</p>
                </div>
                <p className={styles.degree}>
                    {weather.visibility / 1000} KM
                </p>
                <h3 className={styles.description}>
                    Visibility is good
                </h3>
            </div>
        </div>
    );
};

export default Cards;
