import React, { useContext, useState } from 'react'
import Avatar from '../../library/Avatar/Avatar.component'
import Input from '../../library/Input/Input.component'
import View from '../../library/View/View.component'
import './createpost.scss'
import useInput from '../../../hooks/useInput'
import Button from '../../library/Button/Button.component'
import FindGiphy from '../FindGiphy/FindGiphy.component'
import { GifURLContext } from '../../../context/GifContext'
import Image from '../../library/Image/Image.component'
import { PostContext } from '../../../context/CreatePostConext'
import Stack from '../../library/Stack/Stack.component'
import Emoji from '../../icons/line/Emoji.line'
import Chevronleft from '../../icons/line/Chevronleft.line'
import Gif from '../../icons/solid/Gif.solid'
import TagFriends from '../../icons/solid/TagFriends.solid'
import Checkin from '../../icons/solid/Checkin.solid'
import TagEvents from '../../icons/solid/TagEvents.solid'
import Lock from '../../icons/solid/Lock.solid'
import Arrow from '../../icons/solid/Arrow.solid'
import Compose from '../../icons/solid/Compose.solid'
import Img from '../../icons/solid/Img.solid'
import Video from '../../icons/solid/Video.solid'
import Close from '../../icons/line/Close.line'

const CreatePost = () => {

    const [ input, handleInput, setInput ] = useInput({ initialState: '' });

    const  gifContext = useContext(GifURLContext);

    const createPost = useContext(PostContext);

    const createNewPostHandler = () => {
       if(input.trim() !== ''){
            createPost.handlePosts({
                text : input,
                img : gifContext.gifurl
            })
            setInput('');
            gifContext.setGifUrl('');
       }
    }

    return (
      <View as="figure" className="createpost">
          <View as="header" className="createpost_header">
                <Stack direction="h" className="createpost_header-btn">
                    <Button moreClassName="createpost_header-btn--button active"  variant="transparent" leftIcon={<Compose stroke={'#545455'} />}>
                        Compose Post
                    </Button>
                    <Button moreClassName="createpost_header-btn--button"  variant="transparent" leftIcon={<Img stroke={'#545455'} />}>
                        Photo/Video Album
                    </Button>
                    <Button moreClassName="createpost_header-btn--button" variant="transparent" leftIcon={<Video stroke={'#545455'} />}>
                       Live Video
                    </Button>
                </Stack>

                <Close stroke={'#acacae'} size={24}/>
          </View>
          <View className="createpost_write">
              <View className="createpost_write--wrapper">
                <Avatar src={"/images/avatar.webp"} alt="fb_user" />
              </View>
              <Input type="text" placeholder="Write something here..." rows="4" value={input} onChange={handleInput} className="createpost_write--input"/>
          </View>
          <View className="createpost_emoji">
              <Emoji stroke="#acacae"/>
          </View>
         {gifContext.gifurl && <View className="createpost_media">
              <Image className="createpost_media--gif" src={gifContext.gifurl} alt="upload_img" />
          </View>}
          <Stack direction="h" className="createpost_gradients">
              <View className="createpost_gradients--arrow">
                  <Chevronleft stroke="#fbfbfb"/>
              </View>
              {
                  Array(8).fill('foo').map((_, id) => (
                      <Image src={`/gradients/${id + 1}.webp`} alt={`gradient_${id + 1}`} className="createpost_gradients--gradient" />
                  ))
              }
          </Stack>
          <View className="createpost_activity">
              <View className="createpost_activity_stack">
                <Button moreClassName="createpost_activity_stack--button" leftIcon={<TagFriends stroke="#839dcf"/>} variant="secondary" >
                    Tag friends
                </Button>
                <Button moreClassName="createpost_activity_stack--button" leftIcon={<Checkin stroke="#BF4D7C"/>} variant="secondary" >
                    Check in
                </Button>
              </View>
              <View className="createpost_activity_stack">
                <Button moreClassName="createpost_activity_stack--button" leftIcon={<Gif stroke="#7B759D"/>} variant="secondary"  onClick={() => gifContext.setGifChoosingWidget(!gifContext.showGifChoosingWidget)}>
                    GIF
                </Button>
                <Button moreClassName="createpost_activity_stack--button"  variant="secondary" leftIcon={<TagEvents stroke="#BF4D7C"/>}>
                    Tag Event
                </Button>
               {gifContext.showGifChoosingWidget && <FindGiphy/>}
              </View>
          </View>
          <View className="createpost_footer" as="footer">
            <Stack direction="h" className="createpost_footer--box">
                <Button leftIcon={<Lock stroke={'#545455'}/>} rightIcon={<Arrow size={24} stroke={'#545455'} className="createpost_footer--box-righticon"/>}>
                    Only me
                </Button>
                <Button onClick={createNewPostHandler}>
                    Post
                </Button>
            </Stack>
          </View>
      </View>
    )
}

export default CreatePost
