import { DateTime } from "luxon" 

const API_KEY = "e9a837ec3ec3387c7e8c784e48d8f256"
const BASE_URL = "https://api.openweathermap.org/data/2.5"
const NINJA_KEY = "YcqhtmasumdFVSQXNRmsgg==Jz6pz7fn9l5nez3e"

///////////////////////////////////////
export const geoApi = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '343b8a7074msh6ebdaf451332a0ep12e423jsn77c3312e4d15',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

///////////////////////////////////////

export const ninjaApi = {
	method: 'GET',
	headers: { 'X-Api-Key': NINJA_KEY },
    contentType: 'application/json',
};
export const NINJA_API_URL = "https://api.api-ninjas.com/v1/city"

///////////////////////////////////////

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})
    return fetch(url)
    .then((response) => response.json())
}

// console.log(getCitiesNames)

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

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, humidity, visibility, name, dt, country, sunrise, details, icon, speed, deg}
}

    const formatForecastWeather = (data) => {
        let {timezone, daily, hourly} = data
        daily = daily.slice(0,8).map((day) => {
            return {
                title: formatToLocalTime(day.dt, timezone, 'ccc'),
                tempMin: day.temp.min,
                tempMax: day.temp.max,
                tempDay: day.temp.day,
                tempNight: day.temp.night,
                temp: day.temp.day,
                icon: day.weather[0].icon
            }
        })
        hourly = hourly.slice(0,10).map(day => {
            return {
                title: formatToLocalTime(day.dt, timezone, 'hh:mm a'),
                temp: day.temp,
                uv: day.uvi,
                dewPoint: day.dew_point,
                icon: day.weather[0].icon
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
    let latitude = []
    let longitude = 0
    navigator.geolocation.getCurrentPosition((pos) => {
        latitude = latitude.push(pos.coords.latitude)
        longitude = pos.coords.longitude
    })
    console.log(latitude.join(''))

    const iconFromUrl = (code) => `https://openweathermap.org/img/wn/${code}.png`

    const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy | Local Time: 'hh:mm a"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
export default formatedWeatherData

export {iconFromUrl}
