import React from 'react'
import View from '../View/View.component'
import './image.scss'

const Image = ({ src, alt, className="" }) => {
    return (
        <View className={`imgbase ${className}`}>
            <img src={src} alt={alt} />
        </View>
    )
}

export default Image
