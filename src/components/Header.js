import '../styles/Header.css';

const Header = ({ weather, items }) => {
    const [weatherArray] = items;

    return (
        <header className="header">
            <p className="header-city">{weather.name}</p>
            <p className="header-degree">{Math.round(weather.temp)}°</p>
            <p className="header-weather">{weather.details}</p>
            <p className="header-day-and-night">
                H:{Math.round(weatherArray.tempMax)}° L:
                {Math.round(weatherArray.tempMin)}°
            </p>
        </header>
    );
};

export default Header;
