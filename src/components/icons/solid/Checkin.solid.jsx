import React from 'react'

const Checkin = ({ size, stroke }) => {
    return (
        <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.7808 19.7005C17.0905 16.7551 20 12.4759 20 9.6087C20 4.85424 16.4183 1 12 1C7.58172 1 4 4.85424 4 9.6087C4 12.4759 6.90945 16.7551 9.21921 19.7005C10.4242 21.2371 11.0268 22.0055 12 22.0055C12.9732 22.0055 13.5758 21.2371 14.7808 19.7005ZM12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13Z" fill={stroke || '#000'} />
        </svg>
    )
}

export default Checkin