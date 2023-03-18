import {useState} from 'react'
import '../styles/SideBar.css'
import Search from './Search'
import Modal from '../Modal'
import SavedLocation from './Saved-location'

const SideBar = ({weather, items}) => {

    return (
        <div className="sidebar-wrapper">
            <Search />
            <SavedLocation weather={weather} items={items}/>
        </div>
    )
}

export default SideBar