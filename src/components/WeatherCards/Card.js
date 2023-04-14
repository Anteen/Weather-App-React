import '../../styles/Card.css';
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

const Card = ({ weather }) => {
    const [hourly] = weather.hourly;

    const timeConverter = () => {
        let timeData = weather.sunrise;
        let onlyTime = timeData - 1641600000;
        let h = Math.floor(onlyTime / 3600000);
        let m = (onlyTime / 3600000).toFixed(4).split('');
        let removedHours = m.splice(0, 3).join('');
        m = Math.round(Number(`0.${m.join('')}`) * 60);
        let convertedTime = `${h}:${m}`;
        return convertedTime;
    };

    return (
        <>
            <div className="card-wrapper">
                <div className="card-wrapper__header">
                    <img src={SunMax} />
                    <p className="card-wrapper__title">uv-index</p>
                </div>
                <p className="card-wrapper__degree">12</p>
                <p className="card-wrapper__subtitle">Middle</p>
                <img src={RLine} className="rainbow-line" />
                <p className="card-wrapper__description">
                    Middle for the rest of the day.
                </p>
            </div>
            <div className="card-wrapper">
                <div className="card-wrapper__header">
                    <img src={Sunrise} />
                    <p className="card-wrapper__title">sunrise</p>
                </div>
                <p className="card-wrapper__degree">11:28 AM</p>
                <div className="card-wrapper__img-wrapper">
                    <img src={sunriseVector} className="sunrise-vector" />
                    <img src={sunriseEllipse} className="sunrise-ellipse" />
                </div>
                <p className="card-wrapper__description">
                    Sunrise: {timeConverter()} AM
                </p>
            </div>
            <div className="card-wrapper">
                <div className="card-wrapper__header">
                    <img src={Wind} />
                    <p className="card-wrapper__title">wind</p>
                </div>
                <div className="speed-wrapper">
                    <img src={Compas} className="compas-wrapper" />
                    <div className="speed-text">
                        <p className="speed-title">
                            {Math.round(weather.speed)}
                        </p>
                        <p className="speed-subtitle">m/s</p>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card-wrapper__header">
                    <img src={FeelsLike} />
                    <p className="card-wrapper__title">feels like</p>
                </div>
                <p className="card-wrapper__degree">
                    {Math.round(weather.feels_like)}°
                </p>
                <h3 className="card-wrapper__description">
                    Similar to the actual temperature
                </h3>
            </div>
            <div className="card-wrapper">
                <div className="card-wrapper__header">
                    <img src={Humidity} />
                    <p className="card-wrapper__title">humidity</p>
                </div>
                <p className="card-wrapper__degree">{weather.humidity}%</p>
                <p className="card-wrapper__description">
                    The dew point is {Math.round(hourly.dewPoint)}° right now.
                </p>
            </div>
            <div className="card-wrapper">
                <div className="card-wrapper__header">
                    <img src={visibility} />
                    <p className="card-wrapper__title">visibility</p>
                </div>
                <p className="card-wrapper__degree">
                    {weather.visibility / 1000} KM
                </p>
                <h3 className="card-wrapper__description">
                    Visibility is good
                </h3>
            </div>
        </>
    );
};

export default Card;
