import React from 'react'

const Button = ({ as: Component = "button", children, ...rest }) => {
    return (
       <Component className="btn" {...rest}>
        {children}
       </Component>
    )
}

export default Button