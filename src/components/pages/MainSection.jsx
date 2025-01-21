import {useContext} from 'react'
import videoSrc from '../../assets/img/video/Youlens_showreel_2023-2024___v3.mp4'
import ScrollbarContext from '../ScrollbarContext'
import {Helmet} from 'react-helmet'

function MainSection() {

    const { getScrollbar } = useContext(ScrollbarContext) // Utilisez le contexte pour accéder à getScrollbar

    const handleScrollToSection = (sectionId) => {
        const scrollbar = getScrollbar()
        const section = document.getElementById(sectionId)

        if (scrollbar && section) {
            // Utilisez l'instance de smooth-scrollbar pour déclencher le défilement
            scrollbar.scrollIntoView(section, { offsetTop: -scrollbar.offset.y })
        } else {
            // Fallback au défilement natif si smooth-scrollbar n'est pas disponible
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="main-section" className="main">
            <Helmet>
                <title>Youlens | Vidéaste et pilote de drone | Montpellier</title>
                <link rel="canonical" href="https://youlens.fr" />
            </Helmet>
            <div className="main__container">
                <video className="main__container__video" autoPlay muted playsInline loop src={videoSrc}></video>
            </div>
            <h1 className="main__h1">
                <span className='main__h1__brand'>Youlens</span>Sublimer les projets par l’image.
            </h1>
            <div className="main__arrow" onClick={() => handleScrollToSection('project-section')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
        </section>
    )
}

export default MainSection