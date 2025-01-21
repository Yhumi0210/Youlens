import { useState } from 'react'
import { weddingsProjects } from './datas/weddingsProjects'
// import GalleryOpener from '../components/common/GalleryOpener'
// import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Lightbox from 'yet-another-react-lightbox'

export default function Filmography() {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)
    const [currentImages, setCurrentImages] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const toggleBodyScroll = (disable) => {
        if (disable) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }

    const openGallery = (projectId) => {
        const selectedProject = weddingsProjects.find((project) => project.id === projectId)
            setCurrentImages(
                selectedProject.images.map((videoId) => ({
                    type: 'vidéo',
                    src: videoId,
                    title: selectedProject.title,
                }))
            )
            setCurrentIndex(0)
            setIsGalleryOpen(true)
            toggleBodyScroll(true)
    }

    const closeGallery = () => {
        setIsGalleryOpen(false)
        toggleBodyScroll(false)
    }

    const renderGalleryItem = (item) => {
        if (item.type === 'vidéo') {
            return (
                <div className="gallery__contain">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${item.src}`}
                        sandbox="allow-scripts allow-same-origin allow-presentation"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onClick={(e) => e.stopPropagation()}
                        className="gallery__contain__video"
                    ></iframe>
                </div>
            )
        } else {
            return (
                <div className="gallery__contains">
                    <img
                        className="gallery__contains__photo"
                        src={`../img/photo/${item.src}`}
                        alt={item.title}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )
        }
    }

    const nextProject = (event) => {
        event.stopPropagation()
        if (weddingsProjects.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % weddingsProjects.length)
        }
    }

    const prevProject = (event) => {
        event.stopPropagation()
        if (weddingsProjects.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + weddingsProjects.length) % weddingsProjects.length)
        }
    }

    const currentProject = weddingsProjects.length > 0 ? weddingsProjects[currentIndex] : null
    // const currentProject = weddingsProjects[currentIndex]
    console.log('weddingsProjects:', weddingsProjects)
    console.log('currentIndex:', currentIndex)
    console.log('currentProject:', currentProject)
    const isSingleVideo = currentImages.length === 1 && currentImages[0].type === 'vidéo'

    return (
        <section id='filmography' className="filmography">
            <h2 className='filmography__title'>FILMOGRAPHIE</h2>
            <p className='filmography__text'>
                Chaque couple et chaque mariage est unique, il n`y a pas de
                recette universelle, c`est pourquoi je tente, j`échoue et je
                recommence, jusqu`à obtenir la combinaison parfaite pour chaque
                film...
            </p>
            <section className='filmography__events'>
                <div className='filmography__events__videos'>
                        <svg onClick={prevProject} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5}
                             stroke="currentColor"
                             className="size-6 arrows filmography__events__videos__arrow-left">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                        </svg>
                        <img src={`../img/photo/${currentProject.thumbnail}`} alt={currentProject.title}
                             className='iframe filmography__events__videos__video'
                             onClick={() => openGallery(currentProject.id)}/>
                        <svg onClick={nextProject} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5}
                             stroke="currentColor"
                             className="size-6 arrows filmography__events__videos__arrow-right">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>
                </div>
                <h3 className='filmography__events__justmarried'>{currentProject.title.toUpperCase()}</h3>
                <p className='filmography__events__commentary'>{currentProject.commentary}</p>
                <Lightbox
                    open={isGalleryOpen}
                    close={closeGallery}
                    slides={currentImages.map((item) => ({
                        src: item.src,
                        content: renderGalleryItem(item),
                        description: (
                            <div className='gallery__infos'>
                                <p className="gallery__infos__titles">{item.title}</p>
                            </div>
                        )
                    }))}
                    index={currentIndex}
                    onPrev={!isSingleVideo ? prevProject : undefined}
                    onNext={!isSingleVideo ? nextProject : undefined}
                    render={{
                        slide: ({ slide }) => (
                            <div>
                                {slide.content}
                                {slide.description}
                            </div>
                        ),
                        buttonPrev: !isSingleVideo ? undefined : () => null,
                        buttonNext: !isSingleVideo ? undefined : () => null,
                    }}
                />
            </section>
        </section>
    )
}
