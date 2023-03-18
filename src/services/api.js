import { DateTime } from "luxon" 

const API_KEY = "e9a837ec3ec3387c7e8c784e48d8f256"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})
    return fetch(url)
    .then((response) => response.json())
}

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, humidity},
        visibility,
        name,
        dt,
        sys: {country, sunrise},
        weather,
        wind: {speed, deg}
    } = data

    const {main: details} = weather[0]

    return {lat, lon, temp, feels_like, humidity, visibility, name, dt, country, sunrise, details, speed, deg}
}

    const formatForecastWeather = (data) => {
        let {timezone, daily, hourly} = data
        daily = daily.slice(0,8).map((day) => {
            return {
                title: formatToLocalTime(day.dt, timezone, 'ccc'),
                tempMin: day.temp.min,
                tempMax: day.temp.max,
                temp: day.temp.day,
            }
        })
        hourly = hourly.slice(0,10).map(day => {
            return {
                title: formatToLocalTime(day.dt, timezone, 'hh:mm a'),
                temp: day.temp,
                uv: day.uvi,
                dewPoint: day.dew_point
            }
        })

        return {timezone, daily, hourly}
    }

const formatedWeatherData = async (searchParams) => {
    const formatedCurrentWeather = await getWeatherData('weather', searchParams)
    .then(formatCurrentWeather) 

    const {lat, lon} = formatedCurrentWeather

    const formatedForecastWeather = await getWeatherData('onecall', {
        lat, 
        lon, 
        exclude: 'current,minutely,alerts', 
        units: searchParams.units
    }).then(formatForecastWeather)

    return {...formatedCurrentWeather, ...formatedForecastWeather}
}

    const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy | Local Time: 'hh:mm a"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
export default formatedWeatherData
