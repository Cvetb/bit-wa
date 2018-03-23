import React from 'react';
import {Link} from 'react-router-dom';

const BlogItem = (props) =>{
    return(
<div class="row">
    <div class="col s12 m8 offset-m2">
      <div class="card indigo lighten-5">
        <div class="card-content deep-purple-text text-accent-3">
          <Link to='/post' class="card-title">Card Title</Link>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
  </div>
    )
}
export default BlogItem;
