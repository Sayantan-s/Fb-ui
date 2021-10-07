import { useEffect, useReducer } from "react"

const initialState = {
    loading : false,
    data : null,
    error : ''
}

const reducer = (state, { type, payload }) => {
    switch (type){
        case 'LOADING':
            return {
                ...state,
                loading : true,
                data : null,
                error : ''
            }
        case 'FETCH_SUCCESSFULL':
            return {
                ...state,
                loading : false,
                data : payload,
                error : ''
            }
        case 'FETCH_UNSUCCESSFULL':
            return {
                ...state,
                loading : false,
                data : null,
                error : payload
            }
        default: return state;
    }
}

const useFetch = ({ url = 'www.google.com', cb }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    useEffect(() => {
        (async() => {
            dispatch({ type : 'LOADING' })
            try {
                const req = await (await fetch(url)).json()
                const data = cb(req);
                dispatch({ type : 'FETCH_SUCCESSFULL', payload : data })
            } catch (error) {
                dispatch({ type : 'FETCH_UNSUCCESSFULL', payload : "Failed to fetch!" })
            }
        })()
    },[])

    return state
}

export default useFetch