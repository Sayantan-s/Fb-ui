import React from 'react'
import View from '../View/View.component'
import './stack.scss'

const Stack = ({ children, direction = "v" }) => {
    return (
       <View className={`stack_${direction}`}>
           {children}
       </View>
    )
}

export default Stack
