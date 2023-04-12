import '../styles/SideBar.css'
import Search from './Search'
import MyLocation from './MyLocation'
import SavedLocations from './SavedLocations'

const SideBar = ({localWeather, activeSideBar, openModal, setQuery, unactivate, localQuery, savedWeather, savedQuery, savedLocationArr}) => {

    return (
        <nav className={activeSideBar}>
            <Search openModal={openModal}/>
            <div className='locations-container'>
                {/* {localQuery !== null && <MyLocation  setQuery={setQuery} localWeather={localWeather} unactivate={unactivate}/> } */}
                {savedWeather && <SavedLocations setQuery={setQuery} savedWeather={savedWeather} unactivate={unactivate}/>} 
            </div>
        </nav>
    )
}

export default SideBar