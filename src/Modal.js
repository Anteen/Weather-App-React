import { useEffect, useState } from 'react'
import React from 'react'
import reactDom from 'react-dom'
import './Modal.css'
import ModalItems from './components/ModalItems'
import './styles/ModalItems.css'
import X from './assets/images/x.svg'
import search from './assets/images/Vector.svg'

const modalRootElement = document.querySelector("#modal")

const Modal = ({open, onClose, onSearchChange, setQuery, units, setUnits} ) => {

    const element = document.createElement("div")

    const [city, setCity] = useState('')

    const handleOnClick = () => {
        if (city !== '') {
            setQuery({q: city})
            onClose()
        } 
    }
    // setTimeout(handleOnClick, 1000)
    
    // const delay = (e) => {
    //     e.preventDefault();
    //     setTimeout(() => {}, 2000);
    //   };

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
                        <div className='modal__input-container'>
                            <img src={search} className='modal__search-icon'/>
                            {/* <input className='modal__input' value={search} onChange={handleOnChange} /> */}
                            <input className='modal__input' type='text' defaultValue={city} onChange={(e) => setCity(e.target.value)} />
                            {/* <input className='modal__input' defaultValue={city} /> */}
                        </div>
                        <div className="modal-items__container">
                            {/* {Modal.map((person) => {
                            return <Person key={person.name} {...person}/>
                            }) }   */}
                            <ModalItems />
                        </div>
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