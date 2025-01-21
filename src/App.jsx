import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'
import ReactGA from 'react-ga4'

export default function App() {
    const location = useLocation()


    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: location.pathname })
    }, [location])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}