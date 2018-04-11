import React from 'react';
import BlogItem from './BlogItem';


const BlogList = (props) => {
    return (
        <div>
            {props.items.map((item, i)=> <BlogItem key={item.id} item={item}/>)}   
        </div>
    )
    }
    export default BlogList;