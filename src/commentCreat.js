import axios from 'axios';
import React from 'react';

import { useState } from 'react';
// eslint-disable-next-line import/no-anonymous-default-export
export default ({postId , fetchPosts}) => {
    const [content,setContent] = useState('');
const onSubmit =  (e) => {

    e.preventDefault()

     axios.post(`http://localhost:3500/posts/${postId}/comments` , {
        content
    }).then(() => {fetchPosts()})

   
    setContent('');
}
    return (
        <div>
            <form onSubmit={onSubmit} className='form-group' >
                <div>
                <label className = 'control' >new comment</label>
                <input value={content} onChange={(e) =>setContent(e.target.value)}type='text' className='form-control'/>
                </div>
                <button className = 'btn btn-primary'>add comment</button>
            </form>
        </div>
    )
}