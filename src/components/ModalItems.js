import '../styles/ModalItems.css'
import check from '../assets/images/check.svg'

const ModalItems = () => {
    return (
        <>
            <div className='item-wrapper'>
                <h3 className='item-header'>Paris, TN</h3>
                <p className='item-description'>Unites States of America</p>
                <img src={check} className='confirm-city-check' />
            </div>
        </>
    )
}

export default ModalItems