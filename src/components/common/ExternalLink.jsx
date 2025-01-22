import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


//...props: permet d'attacher des props à l'élément sans avoir à le réécrire
export function ExternalLink({ to, children, ...props }) {
    const isExternal = typeof to === 'string' && /^https?:\/\//.test(to)
    if (isExternal) {
        return (
            <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        )
    }
    return <Link to={to} {...props}>{children}</Link>
}

ExternalLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}