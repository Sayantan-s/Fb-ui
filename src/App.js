import { useContext } from 'react';
import CreatePost from './components/elements/CreatePost/CreatePost.component';
import Post from './components/elements/Post/Post.component';
import Stack from './components/library/Stack/Stack.component';
import View from './components/library/View/View.component';
import { PostContext } from './context/CreatePostConext';

function App() {
    const { posts } = useContext(PostContext);

    return (
        <View isLayout>
            <CreatePost />
            {!!posts.length && (
                <Stack direction="v" className="postcollection">
                    {posts.map((post, id) => <Post key={id} {...post} />).reverse()}
                </Stack>
            )}
        </View>
    );
}

export default App;
