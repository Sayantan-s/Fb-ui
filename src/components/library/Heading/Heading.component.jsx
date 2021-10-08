import React from 'react'

const Heading = ({level, as: Component = `h${level}`, ...rest}) => {
    return (
      <Component {...rest} />
    )
}

export default Heading
