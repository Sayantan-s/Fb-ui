import React, { createContext, useState } from 'react'

export const GifURLContext = createContext();

const GifContext = ({ children }) => {
    const [gifurl, setGifUrl] = useState('');

    const [ showGifChoosingWidget, setGifChoosingWidget ] = useState(false);

    return (
        <GifURLContext.Provider value={{ gifurl, setGifUrl, showGifChoosingWidget, setGifChoosingWidget }}>
            {children}
        </GifURLContext.Provider>
    )
}

export default GifContext
