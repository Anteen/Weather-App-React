import { useEffect, useState } from 'react';
import { Context } from './context';
import './App.css';
import sidebarStyles from './components/SideBar.module.css' 
import containerStyles from './components/ContainerWithData.module.css'
import ContainerWithData from './components/ContainerWithData.js';
import Modal from './components/Modal';
import formatedWeatherData from './services/api';
import Preloader from './components/Preloader';
import constants from '../src/constants/constants'
const { Paris, units } = constants

const App = () => {
    const [active, setActive] = useState(false);
    const [activeSidebarClass, setActiveSidebarClass] = useState(sidebarStyles.sidebarWrapper);
    const [burgerButtonClass, setBurgerButtonClass] = useState(containerStyles.burgerButton)

    const change = () => {
        if (activeSidebarClass === sidebarStyles.sidebarWrapper) {
            setActiveSidebarClass(`${sidebarStyles.sidebarWrapper} ${sidebarStyles.sidebarWrapperActive}`);
            setBurgerButtonClass(containerStyles.burgerButtonActive)
        } else if (activeSidebarClass === `${sidebarStyles.sidebarWrapper} ${sidebarStyles.sidebarWrapperActive}`) {
            setActiveSidebarClass(sidebarStyles.sidebarWrapper);
            setBurgerButtonClass(containerStyles.burgerButton)
        }
    };
    const adaptiveChange = () => {
        if (activeSidebarClass === `${sidebarStyles.sidebarWrapper} ${sidebarStyles.sidebarWrapperActive}`) {
            setActiveSidebarClass(sidebarStyles.sidebarWrapper);
        }
    };


    const [localQuery, setLocalQuery] = useState(null);
    const [query, setQuery] = useState(Paris);
    const [localWeather, setLocalWeather] = useState({});
    const [selectedCity, setSelectedCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [savedLocationCoords, setSavedLocationCoords] = useState(JSON.parse(localStorage.getItem('savedLocationCoords')) || []);
    const [savedCitiesWeather, setSavedCitiesWeather] = useState([]);
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
          setSavedCitiesWeather([...tempDataArr])
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
                    savedCitiesWeather={savedCitiesWeather}
                    weather={weather}
                    openModal={setActive}
                    localWeather={localWeather}
                    activeSidebarClass={activeSidebarClass}
                    burgerButtonClass={burgerButtonClass}
                />
                <Modal
                    open={active}
                    onClose={() => setActive(false)}
                    setQuery={setQuery}
                    activeSidebarClass={activeSidebarClass}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    savedLocationCoords={savedLocationCoords}
                    setSavedLocationCoords={setSavedLocationCoords}
                />
            </div>
        </Context.Provider>
    );
}

export default App;
