import React from 'react';
import View from '../View/View.component';
import './stack.scss';

const Stack = ({ children, direction = 'v', className = '' }) => {
    return <View className={`stack_${direction} ${className}`}>{children}</View>;
};

export default Stack;
