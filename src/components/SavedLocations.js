import SavedLocation from "./SavedLocation"
import styles from '../styles/SavedLocation.module.css'

const SavedLocations = ({setQuery, savedCitiesWeather, unactivateSidebar}) => {
    
    return (
        <div className={styles.savedLocationsContainer}>
            {savedCitiesWeather.map((location, index) => {
                return (
                    <SavedLocation
                        key={index}
                        {...location}
                        setQuery={setQuery}
                        location={location}
                        unactivateSidebar={unactivateSidebar}
                    />
                );
            })}
        </div>
    );
}
export default SavedLocations