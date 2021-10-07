import React from 'react'
import Avatar from '../../library/Avatar/Avatar.component'
import Input from '../../library/Input/Input.component'
import View from '../../library/View/View.component'
import './createpost.scss'
import useInput from '../../../hooks/useInput'
import Button from '../../library/Button/Button.component'
import FindGiphy from '../FindGiphy/FindGiphy.component'

const CreatePost = () => {

    const [ input, handleInput ] = useInput({ initialState: '' });

    return (
      <View as="figure" className="createpost">
          <View as="header">
              header
          </View>
          <View className="createpost_write">
              <View className="createpost_write-wrapper">
                <Avatar src={"/images/avatar.webp"} alt="fb_user" />
              </View>
              <Input type="text" placeholder="Write something here..." as="textarea" rows="8" value={input} onChange={handleInput}/>
          </View>
          <View>
              emoji
          </View>
          <View>
              Gradients
          </View>
          <View className="createpost_activity">
              <View className="createpost_activity_stack">
                <Button moreClassName="createpost_activity_stack--button">
                    Tag friends
                </Button>
                <Button moreClassName="createpost_activity_stack--button">
                    Tag friends
                </Button>
              </View>
              <View className="createpost_activity_stack">
                <Button moreClassName="createpost_activity_stack--button">
                    GIF
                </Button>
                <Button moreClassName="createpost_activity_stack--button">
                    Tag friends
                </Button>
                <FindGiphy/>
              </View>
          </View>
          <View>
              Footer with buttons
          </View>
      </View>
    )
}

export default CreatePost
