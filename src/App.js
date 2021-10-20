import React from "react";
import Post from "./postCreate"
import PostList from "./postList"
import axios from 'axios';
import {useState , useEffect} from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [posts , setPosts ] = useState({});

    const fetchPosts = async () => {
        const result = await axios.get('http://localhost:4500/posts');
        setPosts(result.data)
        }

        useEffect(() =>{
            fetchPosts();
        },[])

    return <div className="container">
        <h1>create new post</h1>
        <Post fetchPosts={fetchPosts} />
        <hr/>
        <h1>posts</h1>
        <PostList posts={posts} fetchPosts = {fetchPosts}/>
    </div>;
};

