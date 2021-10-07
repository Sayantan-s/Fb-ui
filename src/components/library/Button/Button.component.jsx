import React from 'react'
import './button.scss'

const Button = ({ as: Component = "button", moreClassName = "", children, leftIcon: IconLeft, rightIcon: IconRight, ...rest }) => {
    return (
       <Component className={`btn ${moreClassName}`} {...rest}>
        { IconLeft && <IconLeft /> }
        {children}
        { IconRight && <IconRight /> }
       </Component>
    )
}

export default Button