import { useEffect, useState } from 'react'
import React from 'react'
import reactDom from 'react-dom'
import './Modal.css'
import ModalItems from './components/ModalItems'
import './styles/ModalItems.css'
import X from './assets/images/x.svg'
import search from './assets/images/Vector.svg'
import {AsyncPaginate}  from 'react-select-async-paginate'
import { GEO_API_URL, geoApi, NINJA_API_URL, ninjaApi } from './services/api'

const modalRootElement = document.querySelector("#modal")

const Modal = ({open, onClose, onSearchChange, setQuery, units, setUnits} ) => {
    // console.log(onSearchChange)
    const element = document.createElement("div")

    const [city, setCity] = useState('')

    const handleOnChange = (searchData) => {
        setCity(searchData)
        onSearchChange(searchData)
    }
    
    const loadCitiesList = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=400000&namePrefix=${inputValue}`, geoApi)
        // return fetch(`${NINJA_API_URL}?name=${inputValue}`, ninjaApi)
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        lat: city.latitude,
                        lon: city.longitude,
                        label: `${city.name}, ${city.countryCode}`
                    }
                })
            }
            console.log(response)
        })
        .catch(err => console.error(err));
    }
    
    
    const handleOnClick = () => {
        if (city !== '') {
            setQuery({
                lat: city.lat,
                lon: city.lon,
            })
            onClose()
        } 
    }
    useEffect(() => {
        if (open) {
            modalRootElement.appendChild(element);
    
            return () => {
                modalRootElement.removeChild(element)
            }
        }
    })
    if (open) {
        return reactDom.createPortal(
            <div className="modal active" onClick={e => e.stopPropagation()}>
                    <button className='closing-button' onClick={onClose}>
                        <img src={X} className='closing-svg'/>
                    </button>
                    <div className="modal__content">
                        <AsyncPaginate 
                            placeholder='Search for city...'
                            debounceTimeout={600} 
                            value={city} 
                            onChange={handleOnChange} 
                            loadOptions={loadCitiesList}
                            />
                    </div>
                <button className='modal__accept-button' onClick={handleOnClick}>OK</button>
            </div>,
            element
        )
    }

    return null;
}

export default Modal
//onClick={() => setActive(false)}
// value={city} onChange={(e) => setCity(e.target.value)}

// <div className='modal__input-container'>
// <img src={search} className='modal__search-icon'/>
// <input className='modal__input' type='text' value={city} onChange={(e) => setCity(e.target.value)}  required/>
// </div>
// {city && <div className="modal-items__container">
// <ModalItems />
// </div>}