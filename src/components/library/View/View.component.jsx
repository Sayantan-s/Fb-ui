import React from 'react'
import './view.scss';

const View = ({ as: Component = "div", children, isLayout, className="", ...rest }) => {
    return (
       <Component className={`viewbase ${isLayout ? "isLayout" : ""} ${className}`} {...rest}>
           {children}
       </Component>
    )
}

export default View
