import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/main.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage'
import LegalMentions from './components/pages/LegalMentions'
import Weddings from './weddingSite/Weddings'
import ReactGA from 'react-ga4'


const originalConsoleError = console.error
console.error = (...args) => {
    if (!args[0].includes('doubleclick') && !args[0].includes('googleads')) {
        originalConsoleError(...args)
    }
}

ReactGA.initialize('G-ZW4JSCH5P0')

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '',
                element: <Weddings />,
            },
            {
                path: '/projets',
                element: <HomePage />,
            },
            {
                path: '/mentions-legales',
                element: <LegalMentions />,
            },
            // {
            //     path: '*',
            //     element: <NotFound/>,
            // },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
