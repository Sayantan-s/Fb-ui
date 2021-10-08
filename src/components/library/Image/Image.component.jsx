import React from 'react'
import View from '../View/View.component'
import './image.scss'

const Image = ({ src, alt, className="", ...rest }) => {
    return (
        <View className={`imgbase ${className}`} {...rest}>
            <img src={src} alt={alt} />
        </View>
    )
}

export default Image
