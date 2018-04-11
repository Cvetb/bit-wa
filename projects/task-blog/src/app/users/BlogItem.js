import React from 'react';

const BlogItem = (props) => {
    return(
        <div>
        <h4>{props.item.title}</h4>
        <p>{props.item.body}</p>
        </div>
    )
    }
    
     
    export default BlogItem;