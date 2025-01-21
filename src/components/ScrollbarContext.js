import React from 'react'

const ScrollbarContext = React.createContext({
    getScrollbar: () => null, // Fournit une fonction par défaut qui retourne null
})

export default ScrollbarContext