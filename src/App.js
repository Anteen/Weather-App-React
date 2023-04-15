import { useEffect, useState } from 'react';
import { Context } from './context';
import './App.css';
import ContainerWithData from './components/ContainerWithData.js';
import Modal from './Modal';
import formatedWeatherData from './services/api';
import Preloader from './components/Preloader';
import constants from '../src/constants/constants'

function App() {
    const [active, setActive] = useState(false);
    const [activeSidebar, setActiveSidebar] = useState('sidebar-wrapper');

    const change = () => {
        setActiveSidebar('sidebar-wrapper sidebar-wrapper_active');
    };
    const adaptiveChange = () => {
        if (activeSidebar === 'sidebar-wrapper sidebar-wrapper_active') {
            setActiveSidebar('sidebar-wrapper');
        }
    };

    const {Paris, units} = constants

    const [localQuery, setLocalQuery] = useState(null);
    const [query, setQuery] = useState(Paris);
    const [localWeather, setLocalWeather] = useState({});
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [savedLocationCoords, setSavedLocationCoords] = useState(JSON.parse(localStorage.getItem('savedLocationCoords')) || []);
    const [savedWeather, setSavedWeather] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            setLocalQuery({
                lat,
                lon,
            });
        });
    }, []);

    useEffect(() => {
        if (localQuery !== null) {
            const fetchWeather = async () => {
                const data = await formatedWeatherData({...localQuery, units});
                setLocalWeather(data);
                setLoading(false);
                setQuery(localQuery);
            };
            fetchWeather();
        }
    }, [localQuery]);

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await formatedWeatherData({ ...query, units});
            setWeather(data);
            setLoading(false);
        };
        fetchWeather();
    }, [query]);

    useEffect (() => {
        const fetchWeather = async () => {
          const tempDataArr = []
          for (let i=0; i<savedLocationCoords.length; i++) {
            const data = await formatedWeatherData({...savedLocationCoords[i], units})
            tempDataArr.push(data)
          }
          setSavedWeather([...tempDataArr])
          setLoading(false)
        }
        localStorage.setItem('savedLocationCoords', JSON.stringify(savedLocationCoords))
        fetchWeather()
      }, [savedLocationCoords])

    if (loading) {
        return <Preloader />;
    }

    return (
        <Context.Provider
            value={{
                change,
                adaptiveChange,
            }}
        >
            <div className="App">
                <ContainerWithData
                    setQuery={setQuery}
                    savedWeather={savedWeather}
                    weather={weather}
                    openModal={setActive}
                    localWeather={localWeather}
                    activeSidebar={activeSidebar}
                />
                <Modal
                    open={active}
                    onClose={() => setActive(false)}
                    setQuery={setQuery}
                    activeSidebar={activeSidebar}
                    city={city}
                    setCity={setCity}
                    savedLocationCoords={savedLocationCoords}
                    setSavedLocationCoords={setSavedLocationCoords}
                />
            </div>
        </Context.Provider>
    );
}

export default App;
