import React from 'react'
import Image from '../../library/Image/Image.component'
import View from '../../library/View/View.component'
import './post.scss';

const Post = ({ text, img }) => {
    return (
        <View className="post" as="article">
            <p>
                {text}
            </p>
            {img && <View className="post_imgwrapper">
                <Image src={img} alt={'post_image'} className="post_imgwrapper--img" />
            </View> }
        </View>
    )
}

export default Post
