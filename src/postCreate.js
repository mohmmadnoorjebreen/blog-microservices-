import axios from 'axios';
import React from 'react';

import { useState } from 'react';
// eslint-disable-next-line import/no-anonymous-default-export
export default ({fetchPosts}) => {
    const [title,setTitle] = useState('');
const onSubmit = async (e) => {
    e.preventDefault()
    
    await axios.post('http://localhost:4000/posts' , {
        title
    })

    setTitle('');
    fetchPosts()
}
    return (
        <div>
            <form onSubmit={onSubmit} className='form-group' >
                <div>
                <label className = 'control' >title</label>
                <input value={title} onChange={(e) =>setTitle(e.target.value)}type='text' className='form-control'/>
                </div>
                <button className = 'btn btn-primary'>add post</button>
            </form>
        </div>
    )
}

