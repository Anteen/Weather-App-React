import '../styles/SideBar.css'
import Search from './Search'
import MyLocation from './MyLocation'
import SavedLocations from './SavedLocations'

const SideBar = ({localWeather, activeSideBarClass, openModal, setQuery, unactivateSidebar, savedCitiesWeather}) => {

    return (
        <nav className={activeSideBarClass}>
            <Search openModal={openModal} />
            <div className="locations-container">
                {localWeather.name && (
                    <MyLocation
                        setQuery={setQuery}
                        localWeather={localWeather}
                        unactivateSidebar={unactivateSidebar}
                    />
                )}
                {savedCitiesWeather && (
                    <SavedLocations
                        setQuery={setQuery}
                        savedCitiesWeather={savedCitiesWeather}
                        unactivateSidebar={unactivateSidebar}
                    />
                )}
            </div>
        </nav>
    );
}

export default SideBar