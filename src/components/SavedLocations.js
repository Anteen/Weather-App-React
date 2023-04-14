import SavedLocation from "./SavedLocation"
import '../styles/SavedLocation.css'

const SavedLocations = ({setQuery, savedWeather, unactivateSidebar}) => {
    
    return (
        <div className="saved-locations-container">
            {savedWeather.map((location, index) => {
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