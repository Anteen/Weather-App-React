import '../styles/SideBar.css'
import Search from './Search'
import SavedLocation from './SavedLocation'

const SideBar = ({weather, items, activate, openModal, setQuery, unactivate}) => {
    return (
        <nav className={activate}>
            <Search openModal={openModal}/>
            <SavedLocation  setQuery={setQuery} weather={weather} items={items} unactivate={unactivate}/>
        </nav>
    )
}

export default SideBar