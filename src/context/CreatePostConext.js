import React, { createContext, useState } from 'react';

export const PostContext = createContext();

const CreatePostContext = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const handlePosts = (post) => {
        setPosts((prevState) => [...prevState, post]);
    };

    return <PostContext.Provider value={{ posts, handlePosts }}>{children}</PostContext.Provider>;
};

export default CreatePostContext;
