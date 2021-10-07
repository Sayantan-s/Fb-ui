import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import useInput from '../../../hooks/useInput';
import Image from '../../library/Image/Image.component';
import Input from '../../library/Input/Input.component';
import Stack from '../../library/Stack/Stack.component';
import View from '../../library/View/View.component';
import './findgiphy.scss';

const FindGiphy = () => {

    const [ input, handleInput ] = useInput({ initialState: '' });

    const [ isQuerying, setIsQuerying ] = useState(false);

    const { loading, data, error } = useFetch({
        url : `https://api.giphy.com/v1/gifs/${isQuerying ? "search" : "trending"}?api_key=9jtsTxgs6gXcfI2wAtjdlGYIEXMtm3l9&limit=20&q="Hello"`,
        cb: data => data.data.map(gif => gif.images.fixed_height.url)
    });

    return (
       <View className="widget">
            <Input type="text" placeholder="Write something here..." value={input} onChange={handleInput}/>
            <View className="widget_gifwrapper">
                {
                    loading ? "loading...":
                    error ? error:
                    data && (
                       <Stack>
                           {
                                data.map((gif, id) => (
                                    <Image key={gif} src={gif} alt={`gif_${id}`} className="widget_gifwrapper--img" />
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

//`https://api.giphy.com/v1/gifs/trending?api_key=9jtsTxgs6gXcfI2wAtjdlGYIEXMtm3l9&limit=20`