// import imageMaries from '../img/photo/weddingheader.jpg'
import {Helmet} from 'react-helmet'
import Presents from './WeddingsPresents'
import Filmography from './WeddingsFilm'
import WeddingsContact from './WeddingsContact'
import videoWedding from '../assets/img/video/youlens-wedding.mp4'

export default function Weddings() {
    return (
        <>
            <Helmet>
                <title>Guillaume Court | Vidéaste de mariage | Sud de la France</title>
                <link rel="canonical" href="https://youlens.fr" />
            </Helmet>
            <div className='weddings'>
                <video src={videoWedding} className='weddings__hero' autoPlay muted playsInline loop/>
                <h1 className='weddings__title'>GUILLAUME COURT<br/>
                    <span className='weddings__title__span'>WEDDING FILMS</span>
                </h1>
            </div>
            <div className='story'>
                <p className='story__votre'>Votre</p>
                <p className='story__your'>YOUR</p>
                    <p className='story__histoire'>Histoire</p>
                    <p className='story__story'>STORY</p>
            </div>
            <Presents/>
            <Filmography/>
            <WeddingsContact/>
        </>
    )
}
