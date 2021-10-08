import React from 'react';

const Chevronleft = ({ size, stroke }) => {
    return (
        <svg
            width={size || 24}
            height={size || 24}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M24 12L16 20L24 28"
                stroke={stroke || 'black'}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Chevronleft;
