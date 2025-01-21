import { useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
// import ScrollbarContext from '../ScrollbarContext'
import Brand from './Brand'
import Logo from './Logo'
import logoclair from '../../assets/img/icons/logoclair.svg'

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    // const { getScrollbar } = useContext(ScrollbarContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleMenuToggle = () => {
        setIsAnimating(true)
        setIsMenuOpen(!isMenuOpen)
    }

    const handleAnimationEnd = () => {
        setIsAnimating(false)
    }

    // const handleScrollToSection = (sectionId) => {
    //     const scrollbar = getScrollbar()
    //     const section = document.getElementById(sectionId)
    //     if (scrollbar && section) {
    //         scrollbar.scrollIntoView(section, { offsetTop: -scrollbar.offset.y })
    //     } else {
    //         section.scrollIntoView({ behavior: 'smooth' })
    //     }
    //     setIsMenuOpen(false)
    // }

    // const handleScrollToSection = (sectionId) => {
    //     if (location.pathname !== '/projets') {
    //         // Redirige vers la page d'accueil avec un hash
    //         navigate(`/#${sectionId}`);
    //     } else {
    //         // Scroll directement si déjà sur la bonne page
    //         const section = document.getElementById(sectionId);
    //         if (section) {
    //             section.scrollIntoView({ behavior: 'smooth' });
    //         }
    //     }
    //
    //     setIsMenuOpen(false);
    // }

    const handleNavigation = (anchor) => {
        if (location.pathname === '/') {
            // Si déjà sur la page d'accueil, scrolle directement
            const element = document.getElementById(anchor)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            // Sinon, navigue vers l'accueil avec l'ancre
            const element = document.getElementById(anchor)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
            navigate(`/#${anchor}`)
        }
        setIsMenuOpen(false)
    }

    if (location.pathname === '/mentions-legales') {
        return null // Ne rien afficher si on est sur la page 'Mentions Légales'
    }

    // Définir la classe nav avec fond noir seulement si isMenuOpen est true et qu'on est sur /mariages
    const navClasses = `hero__nav ${isMenuOpen ? 'is-open' : isAnimating ? 'is-closed' : ''}`

    return (
        <header id="header" className="hero">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="menu-toggle w-6 h-6" onClick={handleMenuToggle}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
            {/*{location.pathname !== '/projets' && <Brand />}*/}
            <nav
                className={navClasses}
                onAnimationEnd={handleAnimationEnd}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="menu w-6 h-6" onClick={handleMenuToggle}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
                    {/* N'affiche pas les liens si on est sur l'accueil */}
                    {location.pathname === '/projets' ? (
                        <div className="hero__nav__link">
                            <Brand/>
                            <Link to='' className="hero__nav__link__page"
                                  onClick={() => setIsMenuOpen(false)}>
                                mariages
                            </Link>
                            <Link to="/projets" className="hero__nav__link__page"
                                  onClick={() => handleNavigation('project-section')}>
                                projets
                            </Link>
                            <Link to='/projets' className="hero__nav__link__page"
                                  onClick={() => handleNavigation('selfportrait')}>
                                à propos
                            </Link>
                            <Link to='/projets' className="hero__nav__link__page"
                                  onClick={() => handleNavigation('contact')}>
                                contact
                            </Link>
                        </div>
                    ) : (
                        <div className="nav__wedding">
                            <p className="nav__wedding__page"
                                  onClick={() => handleNavigation('filmography')}>filmographie</p>
                            <p className="nav__wedding__page"
                                  onClick={() => handleNavigation('contact-form')}>contact</p>
                            <p className="nav__wedding__page"
                                  onClick={() => handleNavigation('presents')}>
                                à propos
                            </p>
                            <Link to="/projets" className="nav__wedding__page" onClick={() => setIsMenuOpen(false)}>
                                autres projets
                            </Link>
                        </div>
            )}
        </nav>
            {location.pathname === '/' ? (
                <Logo path='/projets' logo={logoclair}/>
            ) : (
                <Logo path='' logo={logoclair}/>
            )}
</header>
)
}
