import React, { Component } from 'react';
import '../App.css';
import postsData from './Post.js';
import BlogList from './users/BlogList.js';
import Header from './partials/Header.js';



class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Header headerTitle="Blog"/>      
        <BlogList items={postsData}/>
      </div>
    );
  }
}

export default App;
