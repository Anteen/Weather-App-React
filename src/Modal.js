import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Context } from './context'
import reactDom from 'react-dom'
import './Modal.css'
import './styles/ModalItems.css'
import X from './assets/images/x.svg'
import {AsyncPaginate}  from 'react-select-async-paginate'
import { GEO_API_URL, geoApi } from './services/api'

const modalRootElement = document.querySelector("#modal")

const Modal = ({open, onClose, setQuery, activeSidebar, city, setCity, savedQuery, setSavedQuery, setSavedLocationArr, savedLocationArr} ) => {
    
    const element = document.createElement("div")


    const {change, adaptiveChange, addSavedCity} = useContext(Context)

    const handleOnChange = (searchData) => {
        setCity(searchData)
        console.log(searchData)
    }

    const loadCitiesList = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=400000&namePrefix=${inputValue}`, geoApi)
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
        })
        .catch(err => console.error(err));
    }
    console.log(savedLocationArr)
    
    const saveCity = () => {
        let confirmCity = window.confirm("add city to 'Saved'?") 
            if (confirmCity) {
                const {value, label, ...coords} = city
                setSavedLocationArr([...savedLocationArr, coords])

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
            // console.log(savedLocationArr)
    // console.log(weather)
    
    
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
