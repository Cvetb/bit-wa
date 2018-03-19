import React, { Component } from 'react';
import BlogItem from './BlogItem';
import postsData from '../Post.js';

const BlogList = (props) => {
    return (
        <div>
            {props.items.map((item, i)=> <BlogItem key={item.id} item={item}/>)}   
        </div>
    )
    }
    export default BlogList;