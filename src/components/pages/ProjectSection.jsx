import { useState, useContext } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import logofonce from '../../assets/img/icons/logofonce.svg'
import { projects } from '../data/projects'
import ScrollbarContext from '../ScrollbarContext'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Logo from '../common/Logo'

const CustomSlider = styled(Slider)`
    .slick-track {
        height: auto;
    }
`

const SlickCarousel = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)
    const [currentImages, setCurrentImages] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const { getScrollbar } = useContext(ScrollbarContext)

    const toggleBodyScroll = (disable) => {
        if (disable) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }

    const openGallery = (projectId, startIndex) => {
        const selectedProject = projects.find((project) => project.id === projectId)
        if (selectedProject) {
            const formattedImages = selectedProject.images.map((imageName) => ({
                type: selectedProject.type,
                src: imageName,
                title: selectedProject.title,
            }))

            setCurrentImages(formattedImages)
            setCurrentIndex(startIndex)
            setIsGalleryOpen(true)
            toggleBodyScroll(true)
        } else if (selectedProject.type === 'vidéo') {
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
    }

    const closeGallery = () => {
        setIsGalleryOpen(false)
        toggleBodyScroll(false)
    }

    const scrollToTop = () => {
        const scrollbar = getScrollbar()
        if (scrollbar) {
            scrollbar.scrollTo(0, 0, 500)
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const nextImage = (event) => {
        event.stopPropagation()
        setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length)
    }

    const prevImage = (event) => {
        event.stopPropagation()
        setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length)
    }

    const renderGalleryItem = (item) => {
        if (item.type === 'vidéo') {
            return (
                <div className="gallery__contain">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${item.src}`}
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const isSingleVideo = currentImages.length === 1 && currentImages[0].type === 'vidéo'

    return (
        <section id="project-section" className="project">
            <div className="project__logo" onClick={scrollToTop}>
                <Logo path='/projets' logo={logofonce}/>
            </div>
            <h2 className="project__title">Mes projets</h2>
            <p className="project__line"></p>
            <CustomSlider {...settings}>
                {projects.map((project) => (
                    <div key={project.id} className="project__thumbnail__item">
                        <div className="container">
                            {project.type === 'photos' ? (
                                project.images.slice(0, 4).map((imageName, index) => (
                                    <img
                                        key={imageName}
                                        src={`../img/photo/${imageName}`}
                                        alt={imageName}
                                        className="project__thumbnail__item__medias"
                                        onClick={() => openGallery(project.id, index)}
                                    />
                                ))
                            ) : project.type === 'vidéo' && project.thumbnail ? (
                                <img
                                    src={`../img/photo/${project.thumbnail}`}
                                    alt={project.title}
                                    className="iframe"
                                    onClick={() => openGallery(project.id)}
                                />
                            ) : null}
                        </div>
                        <div className="project__thumbnail__item__info">
                            <p className="project__thumbnail__item__info__title">{project.title}</p>
                            <p className="project__thumbnail__item__info__type">{project.type.toLowerCase()}</p>
                        </div>
                    </div>
                ))}
            </CustomSlider>
            {isGalleryOpen && (
                <Lightbox
                    open={isGalleryOpen}
                    close={closeGallery}
                    slides={currentImages.map((item, index) => ({
                        src: item.src,
                        content: renderGalleryItem(item),
                        description: (
                            <div className='gallery__infos'>
                                <p className="gallery__infos__titles">{item.title}</p>
                                {!isSingleVideo && (
                                    <p className="gallery__infos__number">{index + 1} / {currentImages.length}</p>
                                )}
                                <p className="gallery__infos__type">PROJET {item.type}</p>
                            </div>
                        )
                    }))}
                    index={currentIndex}
                    onPrev={!isSingleVideo ? prevImage : undefined}
                    onNext={!isSingleVideo ? nextImage : undefined}
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
            )}
        </section>
    )
}

export default SlickCarousel
