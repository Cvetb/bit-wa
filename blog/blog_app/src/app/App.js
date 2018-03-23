import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import About from './About/About';
import Home from './Home/HomePage';
import Author from './Authors/AuthorsPage';
import Post from './PostPage/PostMain'
import CreatePost from './PostPage/CreatePost'
import AuthorDetails from './AuthorDetails/AuthorDetails';

const  App =(props) =>{

    return (
     
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/authors' component={Author} />
              <Route path='/about' component={About} />
              <Route path='/author' component={AuthorDetails} />
              <Route exact path='/post/new' component={CreatePost} />
              <Route path='/post' component={Post} />
            </Switch> 
     
      
    );
  }


export default App;
