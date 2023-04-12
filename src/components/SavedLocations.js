import SavedLocation from "./SavedLocation"
import '../styles/SavedLocation.css'

const SavedLocations = ({setQuery, savedWeather, unactivate}) => {
    // console.log(savedWeather)
    return (
        <div className="saved-locations-container">
        {savedWeather.map((location, index) => {
            // console.log(location)
        return <SavedLocation key={index} {...location} setQuery={setQuery} location={location} unactivate={unactivate}/>
        })}  
        </div>
    )
}
export default SavedLocations