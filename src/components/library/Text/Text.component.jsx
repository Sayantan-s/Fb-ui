import React from 'react';

const Text = ({ className, as: Component = `p`, ...rest }) => {
    return <Component className={`${className}`} {...rest} />;
};

export default Text;
