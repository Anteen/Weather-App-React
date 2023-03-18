import '../styles/Modal-items.css'

const ModalItems = () => {
    return (
        <>
            <div className='item-wrapper'>
                <h3 className='item-header'>Paris, TN</h3>
                <p className='item-description'>Unites States of America</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='confirm-city-check'>
                <path d="M4 12L10 18L20 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            </div>
            <div className='item-wrapper'>
                <h3 className='item-header'>Paris, TN</h3>
                <p className='item-description'>Unites States of America</p>
            </div>
            <div className='item-wrapper'>
                <h3 className='item-header'>Paris, TN</h3>
                <p className='item-description'>Unites States of America</p>
            </div>
            <div className='item-wrapper'>
                <h3 className='item-header'>Paris, TN</h3>
                <p className='item-description'>Unites States of America</p>
            </div>
        </>
    )
}

export default ModalItems