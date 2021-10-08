import { useState } from "react"

const useDebounce = () => {
    const [ queryTimeout, setQueryTimeOut ] = useState("");

    const debounce = (callback, wait = 1000) => {
        clearTimeout(queryTimeout);

        const timeout = setTimeout(() => callback(), wait);

        setQueryTimeOut(timeout);
    }

    return debounce;
}

export default useDebounce 