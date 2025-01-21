import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Logo({logo, path}) {
    return (
        <Link to={path}>
            <img className='logo' src={logo} alt='logo Youlens'/>
        </Link>
    )
}

Logo.propTypes = {
    logo: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}