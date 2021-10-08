import React from 'react'
import Avatar from '../../library/Avatar/Avatar.component';
import Image from '../../library/Image/Image.component'
import View from '../../library/View/View.component'
import Heading from '../../library/Heading/Heading.component'
import './post.scss';
import Text from '../../library/Text/Text.component';
import Menu from '../../icons/line/Menu.line'

const Post = ({ text, img }) => {
    
    const date = new Date();

    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <View className="post" as="article">
            <View direction="h" className="post_header">
                <View className="post_header--avatar">
                    <Avatar src={"/images/avatar.webp"} alt="fb_user" />
                </View>
                <View className="post_header--identity">
                    <Heading level={3}>
                        Sayantan Samanta
                    </Heading>
                    <Text className="post_header--identity-time">
                        {date.getUTCDate()} {month[date.getUTCMonth() + 1]} at {date.getHours()}:{date.getMinutes().toString().length < 2 ? "0" + date.getMinutes(): date.getMinutes()} &middot; &#127758;
                    </Text>
                </View>
                <Menu className="post_header--menu" stroke={'#676768'}/>
            </View>
            <Text className="post_content">{text}</Text>
            {img && <View className="post_imgwrapper">
                <Image src={img} alt={'post_image'} className="post_imgwrapper--img" />
            </View> }
        </View>
    )
}

export default Post
