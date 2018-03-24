import React from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import {Link} from 'react-router-dom';

const Post = (props) => {
  
    return (
        <div>
            <Header/>
        <div className="container">
        <br/>
        <div className="row">
    <div className="col s12 m12">
      <div className="card">
        <div className="card-content">
        <Link to="/" className="waves-effect orange darken-3 btn"><i className="material-icons left">chevron_left</i>Back</Link>
        <Link to="/post/new" className="waves-effect orange darken-3 btn right"><i className="material-icons left">create</i>New Post</Link>
          <h1 className="card-title center">Title</h1>
          <div className="center">
          <Link to='/author' className="blue-grey-text text-darken-4"><b>Author Name</b></Link>
        </div><br/>
          <p className="center">Lorem ipsum</p>
        </div>
        <div className="card-action">
        <p><b>3 more posts from same author</b></p>
          <a >This is a link</a><br/>
          
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
