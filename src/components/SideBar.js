import styles from './SideBar.module.css'
import Search from './Search'
import MyLocation from './MyLocation'
import SavedLocations from './SavedLocations'

const SideBar = ({localWeather, activeSidebarClass, openModal, setQuery, unactivateSidebar, savedCitiesWeather}) => {

    return (
        <nav className={activeSidebarClass}>
            <Search openModal={openModal} />
            <div className={styles.locationsContainer}>
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