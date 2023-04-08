import SavedLocation from "./SavedLocation"
import '../styles/SavedLocation.css'

const SavedLocations = ({setQuery, savedWeather, unactivate}) => {
    
    return (
        <div className="saved-locations-container">
        {savedWeather.map((location, index) => {
            let loc = location
        return <SavedLocation key={index} {...location} setQuery={setQuery} loc={loc} unactivate={unactivate}/>
        })}  
        </div>
    )
}
export default SavedLocations