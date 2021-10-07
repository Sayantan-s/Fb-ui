import React from 'react'
import './view.scss';

const View = ({ as: Component = "div", children }) => {
    return (
       <Component>
           {children}
       </Component>
    )
}

export default View
