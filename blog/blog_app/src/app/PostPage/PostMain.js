import React from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import {Link} from 'react-router-dom';

const Post = (props) => {
    return (
        <div>
            <Header/>
        <div className="container">
        <div className="row">
    <div className="col s12 m12">
      <div className="card">
        <div className="card-content">
        <Link to="/" class="waves-effect deep-purple accent-3 btn"><i class="material-icons left">chevron_left</i>Back</Link>
        <Link to="/post/new" class="waves-effect deep-purple accent-3 btn right"><i class="material-icons left">create</i>New Post</Link>
          <h1 className="card-title center">Ovo je prvi naslov</h1>
          <div className="center">
          <a className="deep-purple-text text-accent-3">Author Name</a>
        </div><br/>
          <p className="center">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
        <h5>3 more posts from same author</h5>
          <a className="deep-purple-text text-accent-3" >This is a link</a><br/><br/>
          <a className="deep-purple-text text-accent-3">This is a link</a>
        </div>
      </div>
    </div>
  </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Post;
