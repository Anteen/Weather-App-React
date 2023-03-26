import '../styles/SideBar.css'
import Search from './Search'
import SavedLocation from './SavedLocation'
import MyLocation from './MyLocation'

const SideBar = ({weather, localWeather, items, localItems, activate, openModal, setQuery, unactivate}) => {
    return (
        <nav className={activate}>
            <Search openModal={openModal}/>
            <MyLocation  setQuery={setQuery} localWeather={localWeather} localItems={localItems} unactivate={unactivate}/>
            <SavedLocation  setQuery={setQuery} weather={weather} items={items} unactivate={unactivate}/>
        </nav>
    )
}

export default SideBar