import React from 'react';
import {Link} from 'react-router-dom';

const BlogItem = (props) =>{
    return(
<div class="row">
    <div class="col s12 m8 offset-m2">
      <div class="card">
        <div class="card-content">
          <Link to='/post' class="card-title orange-text text-darken-3">Card Title</Link>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
  </div>
    )
}
export default BlogItem;
