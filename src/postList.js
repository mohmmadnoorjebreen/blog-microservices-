import React from 'react';
import Comments from './commentCreat'
import CommentsList from './commentList'


// eslint-disable-next-line import/no-anonymous-default-export
export default ({posts , fetchPosts}) =>{

   

    const render = Object.values(posts).map(post=>{
        return(
            <div className="card" style={{width : '30%' , marginBottom : '20px'} } key = {post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentsList  comments = {post.comments} fetchPosts={fetchPosts}/>
                    <Comments postId = {post.id} fetchPosts={fetchPosts} />
                </div>
            </div>
        )
    })

    return(
        <div className='d-flex flex-warp flex-row justify-content-between'>
            {render}
        </div>
    )
}