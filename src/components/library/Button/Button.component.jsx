import React from 'react'
import './button.scss'
import Text from '../Text/Text.component'

const Button = ({ as: Component = "button", moreClassName = "", variant="primary", children, leftIcon: IconLeft, rightIcon: IconRight, ...rest }) => {
    return (
       <Component className={`btn ${moreClassName} ${variant}`} {...rest}>
        { IconLeft }
            <Text className={IconLeft ? "ml" : IconRight ? "mr" : ""}>{children}</Text>
        { IconRight }
       </Component>
    )
}

export default Button