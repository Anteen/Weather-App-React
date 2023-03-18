import '../styles/Compas.css'
import E from '../assets/images/compas/E.png'
import Circle from '../assets/images/compas/Group.png'
import N from '../assets/images/compas/N.png'
import Polygon from '../assets/images/compas/Polygon.png'
import S from '../assets/images/compas/S.png'
import W from '../assets/images/compas/W.png'
import Vector from '../assets/images/compas/Vector.png'



const Compas = () => {
    return (
        <div className='compas-wrapper'>
            <img className='E' src={E}/>
            <img className='Circle' src={Circle}/>
            <img className='N' src={N}/>
            <img className='Polygon' src={Polygon}/>
            <img className='S' src={S}/>
            <img className='W' src={W}/>
            <img className='Vector' src={Vector}/>
        </div>
    )
}

export default Compas