import '../../styles/Card-Container.css'
import Cards from './Card'

const CardContainer = ({weather}) => {
    return (
        <div className="card-container">
            <Cards weather={weather}/>
        </div>
    )
}
export default CardContainer