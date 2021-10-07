import { useState } from "react"

const useInput = ({ initialState = '' }) => {
    const [input, setInput] = useState(initialState)
    
    return [input, eve => setInput(eve.target.value)];
}

export default useInput