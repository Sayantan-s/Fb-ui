import React from 'react';

const Arrow = ({ size, stroke, ...rest }) => {
    return (
        <svg
            width={size || 40}
            height={size || 40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M25 11.9474C25 11.559 24.7498 11.2099 24.3686 11.0668C23.9875 10.9236 23.5528 11.0153 23.2718 11.2981L15.2718 19.3507C14.9094 19.7155 14.9094 20.2845 15.2718 20.6493L23.2718 28.7019C23.5528 28.9847 23.9875 29.0764 24.3686 28.9332C24.7498 28.7901 25 28.441 25 28.0526V11.9474Z"
                fill={stroke || 'black'}
            />
        </svg>
    );
};

export default Arrow;
