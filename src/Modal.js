import React from 'react'
import { useEffect, useContext } from 'react'
import { Context } from './context'
import reactDom from 'react-dom'
import './Modal.css'
import './styles/ModalItems.css'
import ExitButton from './assets/images/exit-button.svg'
import { AsyncPaginate }  from 'react-select-async-paginate'
import { GEO_API_URL, geoApi } from './services/api'

const modalRootElement = document.querySelector("#modal")

const Modal = ({open, onClose, setQuery, activeSidebar, city, setCity, setSavedLocationCoords, savedLocationCoords} ) => {
    
    const element = document.createElement("div")


    const {change, adaptiveChange, addSavedCity} = useContext(Context)

    const handleOnChange = (searchData) => {
        setCity(searchData)
    }

    const loadCitiesList = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=400000&namePrefix=${inputValue}`, geoApi)
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        lat: city.latitude.toFixed(4),
                        lon: city.longitude.toFixed(4),
                        label: `${city.name}, ${city.countryCode}`
                    }
                })
            }
        })
        .catch(err => console.error(err));
    }
    
    const saveCity = () => {
        let confirmCity = window.confirm("add city to 'Saved'?") 
            if (confirmCity) {
                const {value, label, ...coords} = city
                setSavedLocationCoords([...savedLocationCoords, coords])

                setQuery({
                    lat: city.lat,
                    lon: city.lon,
                })
                } else {
                    setQuery({
                        lat: city.lat,
                        lon: city.lon,
                    })
                }
            }
    
    const handleOnClick = () => {
        if (city !== '') {
            saveCity()
            onClose()
            adaptiveChange(activeSidebar)
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
                        <img src={ExitButton} className='closing-svg'/>
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
