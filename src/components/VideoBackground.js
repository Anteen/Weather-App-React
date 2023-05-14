import { useCallback } from 'react';
import videoRainy from '../assets/background-videos/rain-28236.mp4'
import videoSnowy from '../assets/background-videos/snow-1387.mp4'
import videoSunny from '../assets/background-videos/white-clouds-2099.mp4'
import videoWindy from '../assets/background-videos/lightning-88492.mp4'
import videoStorm from '../assets/background-videos/clouds-16495.mp4'
import videoCloudy from '../assets/background-videos/clouds-1154.mp4'
import styles from './ContainerWithData.module.css'

const VideoBackground = ({description}) => {

    const getBackgroundVideo = useCallback(() => {
        switch(description) {
            case 'Rain': return videoRainy;
            case 'Drizzle': return videoRainy;
            case 'Snow': return videoSnowy;
            case 'snow': return videoSnowy;
            case 'Clear': return videoSunny;
            case 'Storm': return videoStorm;
            case 'Clouds': return videoCloudy;
            case 'Mist': return videoWindy;
            case 'Smoke': return videoWindy;
            case 'Haze': return videoWindy;
            case 'Dust': return videoWindy;
            case 'Fog': return videoWindy;
            case 'Sand': return videoWindy;
            case 'Ash': return videoWindy;
            case 'Squall': return videoWindy;
            case 'Tornado': return videoWindy;
            default: return null;
        }
    }, [description]);
    
    const backgroundVideo = getBackgroundVideo();
    
    return <video className={styles.backgroundVideo} src={backgroundVideo} autoPlay muted loop />

}
export default VideoBackground;