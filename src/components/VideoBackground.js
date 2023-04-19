import videoRainy from '../assets/background-videos/rain-28236.mp4'
import videoSnowy from '../assets/background-videos/snow-1387.mp4'
import videoSunny from '../assets/background-videos/white-clouds-2099.mp4'
import videoWindy from '../assets/background-videos/lightning-88492.mp4'
import videoStorm from '../assets/background-videos/clouds-16495.mp4'
import videoCloudy from '../assets/background-videos/clouds-1154.mp4'
import styles from '../styles/ContainerWithData.module.css'

const VideoBackground = ({description}) => {

    let backgroundVideo
    switch(description) {
        case 'Rain': backgroundVideo = videoRainy
        break
        case 'Drizzle': backgroundVideo = videoRainy
        break
        case 'Snow': backgroundVideo = videoSnowy
        break
        case 'snow': backgroundVideo = videoSnowy
        break
        case 'Clear': backgroundVideo = videoSunny
        break
        case 'Storm': backgroundVideo = videoStorm
        break
        case 'Clouds': backgroundVideo = videoCloudy
        break
        case 'Mist': backgroundVideo = videoWindy
        break
        case 'Smoke': backgroundVideo = videoWindy
        break
        case 'Haze': backgroundVideo = videoWindy
        break
        case 'Dust': backgroundVideo = videoWindy
        break
        case 'Fog': backgroundVideo = videoWindy
        break
        case 'Sand': backgroundVideo = videoWindy
        break
        case 'Dust': backgroundVideo = videoWindy
        break
        case 'Ash': backgroundVideo = videoWindy
        break
        case 'Squall': backgroundVideo = videoWindy
        break
        case 'Tornado': backgroundVideo = videoWindy
        break
    }
    
    return <video className={styles.backgroundVideo} src={backgroundVideo} autoPlay muted loop />

}
export default VideoBackground