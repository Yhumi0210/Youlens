import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const HorizontalScrollWrapper = ({ children }) => {
    const enableHorizontalScroll = useRef(false)
    const transitionCooldown = useRef(false)
    const [isScreenWide, setIsScreenWide] = useState(window.innerWidth >= 768)

    const updateScrollMode = (isAtMiddle) => {
        if (isScreenWide) {
            if (isAtMiddle && !transitionCooldown.current) {
                enableHorizontalScroll.current = true
                transitionCooldown.current = true
                setTimeout(() => { transitionCooldown.current = false }, 500) // 500 ms cooldown
            } else if (!isAtMiddle) {
                enableHorizontalScroll.current = false
            }
        } else {
            enableHorizontalScroll.current = false
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsScreenWide(window.innerWidth >= 768)
        }

        window.addEventListener('resize', handleResize)
        handleResize() // Initial check

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        const checkPosition = () => {
            const section = document.getElementById('project-section')
            if (!section) return

            const sectionRect = section.getBoundingClientRect()
            const sectionMidPoint = sectionRect.top + (sectionRect.height / 2)
            const isAtMiddle = sectionMidPoint > window.innerHeight * 0.4 && sectionMidPoint < window.innerHeight * 0.6
            updateScrollMode(isAtMiddle)
        }

        window.addEventListener('scroll', checkPosition)
        return () => {
            window.removeEventListener('scroll', checkPosition)
        }
    }, [isScreenWide])

    useEffect(() => {
        const handleWheel = (e) => {
            const element = document.getElementById('horizontal-scroll-wrapper')
            if (!element) return

            if (enableHorizontalScroll.current) {
                const maxScrollLeft = element.scrollWidth - element.clientWidth
                const atStart = element.scrollLeft === 0
                const atEnd = element.scrollLeft === maxScrollLeft

                if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
                    element.scrollLeft += e.deltaY
                    e.preventDefault() // Bloquer le défilement vertical
                }
            }
        }

        window.addEventListener('wheel', handleWheel, { passive: false })

        return () => {
            window.removeEventListener('wheel', handleWheel)
        }
    }, [])

    return (
        <div id="horizontal-scroll-wrapper" style={{ overflowX: isScreenWide ? 'auto' : 'hidden' }}>
            {children}
        </div>
    )
}

HorizontalScrollWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default HorizontalScrollWrapper
