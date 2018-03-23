import React, { Component } from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import BlogItem from './BlogItem';

class Home extends Component {
  
  render() {
    return (
      <div>
          <Header/>
          <h3 className="center">POSTS</h3>
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
          <Footer/>
      </div>
    );
  }
}

export default Home;