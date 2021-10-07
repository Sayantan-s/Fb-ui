import { useState } from "react";
import CreatePost from "./components/elements/CreatePost/CreatePost.component";
import Post from "./components/elements/Post/Post.component";
import View from "./components/library/View/View.component";

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <View isLayout>
      <CreatePost />
      {
        !!posts.length && (
          <View>
            {
              posts.map((post, id) => (
                <Post key={id} {...post} />
              ))
            }
          </View>
        )
      }
    </View>
  );
}

export default App;
