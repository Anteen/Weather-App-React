import '../styles/Header.css'

const Header = ({weather, items}) => {
    const [weatherArray] = items

    return (
        <div className="header">
            <h2 className="header-city">{weather.name}</h2>
            <h1 className="header-degree">{Math.round(weather.temp)}°</h1>
            <h3 className="header-weather">{weather.details}</h3>
            <p className="header-day-and-night">H:{Math.round(weatherArray.tempMax)}°  L:{Math.round(weatherArray.tempMin)}°</p>
        </div>
    )
}

export default Header
