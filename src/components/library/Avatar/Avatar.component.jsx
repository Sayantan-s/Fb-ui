import React from 'react';
import Image from '../Image/Image.component';
import './avatar.scss';

const Avatar = ({ src, alt, className = '' }) => {
    return <Image className={`avatarbase ${className}`} src={src} alt={alt} />;
};

export default Avatar;
