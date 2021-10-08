import React from 'react';
import View from '../View/View.component';
import './input.scss';

const Input = ({ as: Component = 'input', className = '', ...rest }) => {
    if (Component === 'input' || Component === 'textarea') {
        return (
            <View className={`inputbase ${className}`}>
                <Component {...rest} />
            </View>
        );
    }
    throw new Error('Enter valid JSX input elements!');
};

export default Input;
