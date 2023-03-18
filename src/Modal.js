import { useEffect, useState } from 'react'
import React from 'react'
import reactDom from 'react-dom'
import './Modal.css'
import ModalItems from './components/Modal-items'
import './styles/Modal-items.css'
// import { GEO_API_URL, geoAPIOptions } from './services/api'

const modalRootElement = document.querySelector("#modal")

const Modal = (props) => {
    const {open, onClose, onSearchChange} = props
    const element = document.createElement("div")

    const [search, setSearch] = useState()
    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    // const loadOptions = (inputValue) => {
    //     return fetch(`${GEO_API_URL}?city&namePrefix=${inputValue}`, geoAPIOptions) 
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err))
    // }

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
                    <button className='closing-button'>
                        <svg width="21.33" height="21.33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='closing-svg'>
                            <path d="M22.6668 1.33337L1.3335 22.6667M22.6668 22.6667L1.3335 1.33337L22.6668 22.6667Z"  strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                    </button>
                    <div className="modal__content">
                        <div className='modal__input-container'>
                            <svg width="18" height="18" viewBox="0 0 18 18" className="modal__search-icon"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5422 16.3584L11.9627 10.7789C12.8285 9.65957 13.2969 8.29102 13.2969 6.85156C13.2969 5.12852 12.6244 3.51289 11.4084 2.29473C10.1924 1.07656 8.57246 0.40625 6.85156 0.40625C5.13066 0.40625 3.51074 1.07871 2.29473 2.29473C1.07656 3.51074 0.40625 5.12852 0.40625 6.85156C0.40625 8.57246 1.07871 10.1924 2.29473 11.4084C3.51074 12.6266 5.12852 13.2969 6.85156 13.2969C8.29102 13.2969 9.65742 12.8285 10.7768 11.9648L16.3563 17.5422C16.3726 17.5586 16.392 17.5715 16.4134 17.5804C16.4348 17.5893 16.4577 17.5938 16.4809 17.5938C16.504 17.5938 16.5269 17.5893 16.5483 17.5804C16.5697 17.5715 16.5891 17.5586 16.6055 17.5422L17.5422 16.6076C17.5586 16.5913 17.5715 16.5718 17.5804 16.5505C17.5893 16.5291 17.5938 16.5062 17.5938 16.483C17.5938 16.4599 17.5893 16.4369 17.5804 16.4156C17.5715 16.3942 17.5586 16.3748 17.5422 16.3584V16.3584ZM10.2547 10.2547C9.34375 11.1635 8.13633 11.6641 6.85156 11.6641C5.5668 11.6641 4.35938 11.1635 3.44844 10.2547C2.53965 9.34375 2.03906 8.13633 2.03906 6.85156C2.03906 5.5668 2.53965 4.35723 3.44844 3.44844C4.35938 2.53965 5.5668 2.03906 6.85156 2.03906C8.13633 2.03906 9.3459 2.5375 10.2547 3.44844C11.1635 4.35938 11.6641 5.5668 11.6641 6.85156C11.6641 8.13633 11.1635 9.3459 10.2547 10.2547Z"/>
                                </svg>
                            <input className='modal__input' value={search} onChange={handleOnChange} />
                        </div>
                        <div className="modal-items__container">
                            {/* {Modal.map((person) => {
                            return <Person key={person.name} {...person}/>
                            }) }   */}
                            <ModalItems />
                        </div>
                    </div>
                <button className='modal__accept-button'>OK</button>
            </div>,
            element
        )
    }

    return null;
}

export default Modal
//onClick={() => setActive(false)}