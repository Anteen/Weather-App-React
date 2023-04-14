import '../styles/SideBar.css'
import Search from './Search'
import MyLocation from './MyLocation'
import SavedLocations from './SavedLocations'

const SideBar = ({localWeather, activeSideBar, openModal, setQuery, unactivateSidebar, savedWeather}) => {
    
    return (
        <nav className={activeSideBar}>
            <Search openModal={openModal} />
            <div className="locations-container">
                {localWeather.name && (
                    <MyLocation
                        setQuery={setQuery}
                        localWeather={localWeather}
                        unactivateSidebar={unactivateSidebar}
                    />
                )}
                {savedWeather && (
                    <SavedLocations
                        setQuery={setQuery}
                        savedWeather={savedWeather}
                        unactivateSidebar={unactivateSidebar}
                    />
                )}
            </div>
        </nav>
    );
}

export default SideBar