import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({comments , fetchPosts}) =>{
    
    const render = comments.map(comment=>{
        let content ;
    
        if (comment.status === 'approve'){
            content = comment.content
        }
        if (comment.status === 'rejected'){
            content =' it is rejected '
        }
        if (comment.status === 'pending'){
            content = 'it in pending stage'
            fetchPosts()
        }
        return(
            <li key = {comment.id}>{content}</li>
        )
    })

    return(
        <div className='d-flex flex-warp flex-row justify-content-between'>
            <ul>
            {render} 
            </ul>
        </div>
    )
}