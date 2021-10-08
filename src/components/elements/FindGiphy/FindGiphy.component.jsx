import React, { useCallback, useContext, useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import useInput from '../../../hooks/useInput';
import useDebounce from '../../../hooks/useDebounce';
import Image from '../../library/Image/Image.component';
import Input from '../../library/Input/Input.component';
import Stack from '../../library/Stack/Stack.component';
import View from '../../library/View/View.component';
import './findgiphy.scss';
import { GifURLContext } from '../../../context/GifContext';

const FindGiphy = () => {

    const [ input, handleInput ] = useInput({ initialState: '' });

    const [ query, setQuery ] = useState('');

    const  gifContext = useContext(GifURLContext);

    const debounce = useDebounce();

    const { loading, data, error } = useFetch({
        url : `https://api.giphy.com/v1/gifs/${query ? "search" : "trending"}?api_key=${process.env.REACT_APP_API_KEY}&limit=20&q=${query}`, //9jtsTxgs6gXcfI2wAtjdlGYIEXMtm3l9`
        cb: data => data.data.map(gif => gif.images.fixed_height.url)
    });

    const selectGifUrl = gifUrl => {
        gifContext.setGifUrl(gifUrl)
        gifContext.setGifChoosingWidget(false)
    }

    const memoizedQueryTrigger = useCallback(() => {
        debounce(() => setQuery(input))
    },[debounce, input])

    useEffect(() => {
        if(input) memoizedQueryTrigger()
    },[input])

    return (
       <View className="widget">
            <Input type="text" placeholder="Search gif across the world..." value={input} onChange={handleInput} className="widget-input"/>
            <View className="widget_gifwrapper">
                {
                    loading ? "loading...":
                    error ? error:
                    data && (
                       <Stack>
                           {
                                data.map((gif, id) => (
                                    <Image key={gif} src={gif} alt={`gif_${id}`} className="widget_gifwrapper--img" onClick={() => selectGifUrl(gif)}/>
                                ))
                           }
                       </Stack>
                    )
                }
            </View>
       </View>
    )
}

export default FindGiphy
