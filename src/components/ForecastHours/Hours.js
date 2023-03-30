import '../../styles/Hours.css'
import { iconFromUrl } from '../../services/api'


const Hours = ({title, temp, icon}) => {
    title = title.split('')
    title.splice(2, 4)
    
    if (title[0] === '0') {
        title.splice(0, 1)
    }
    title = title.join('')

    return (
        <div className="hours-wrapper">
            <p className='hours-time'>{title}</p>
            {/* <img src={Sunny}></img> */}
            <img src={iconFromUrl(icon)} className='weather-app-icons' />
            <p className='hours-degree'>{Math.round(temp)}°</p>
        </div>
    )
}

export default Hours