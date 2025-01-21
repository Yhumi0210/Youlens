import { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import ScrollbarContext from '../ScrollbarContext'
import logofonce from '../../assets/img/icons/logofonce.svg'
import logoclair from '../../assets/img/icons/logoclair.svg'
import Logo from './Logo'

function Footer() {

    const { getScrollbar } = useContext(ScrollbarContext)

    const scrollToTop = () => {
        const scrollbar = getScrollbar()
        if (scrollbar) {
            scrollbar.scrollTo(0, 0, 500)
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const projects =
        location.pathname === '/projets' || location.pathname === '/mentions-legales'
            ? 'footer'
            : 'bg-black footer'

    return (
        <footer id="contact" className={projects}>
            <div className="footer__container" onClick={scrollToTop}>
                {
                    location.pathname === '/projets' ? (
                        <Logo path='/projets' logo={logofonce} />
                    ) : location.pathname === '/mentions-legales' ? (
                        <Logo path='' logo={logofonce} />
                    ) : (
                        <Logo path='' logo={logoclair} />
                    )
                }
            </div>
            <section className="footer__info">
                <h5 className="footer__info__title">
                    Me contacter
                </h5>
                <section className="footer__info__contact">
                    <div className="footer__info__contact__number">
                        <p className="footer__info__contact__number__phone">Téléphone : <a href="tel:+3379428673">06 79 42 86 73</a></p>
                        <p className="footer__info__contact__number__line"></p>
                        <p className="footer__info__contact__number__mail">E-mail : <a href="mailto:youlens.production@gmail.com">youlens.production@gmail.com</a></p>
                    </div>
                </section>
                <section className="footer__info__social">
                    <div className="footer__info__social__link">
                        <a className="footer__info__social__link__insta" href="https://www.instagram.com/youlens__?igsh=NXR6Y3F4ZjJyYjdi" target="_blank" rel="noreferrer noopener">Instagram</a>
                        {/*<a className="footer__info__social__link__behance" href="https://www.instagram.com/guillaumecourt_?igsh=bWh6NzR4ZjFvdjI2">Behance</a>*/}
                    </div>
                </section>
                <p className="footer__info__rights">
                    <RouterLink to="/mentions-legales" className="footer__info__rights__a" onClick={scrollToTop}>Mentions Légales</RouterLink>
                    <br />© 2024 Youlens. All Rights Reserved.
                </p>
            </section>
        </footer>
    )
}

export default Footer