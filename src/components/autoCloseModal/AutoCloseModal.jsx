import { useEffect } from 'react'
import './AutoCloseModal.css'
import PropTypes from "prop-types"

/**
 * @param isOpen
 * @param onClose
 * @param autoCloseTime
 * @param children
 * @returns {JSX.Element|null}
 * @constructor
 */
export default function AutoCloseModal({ isOpen, onClose, autoCloseTime = 3000, children }) {

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose()
            }, autoCloseTime)

            return () => clearTimeout(timer) // Nettoie le timer si le composant est démonté
        }
    }, [isOpen, onClose, autoCloseTime])

    if (!isOpen) {
        return null
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}

AutoCloseModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    autoCloseTime: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
}
