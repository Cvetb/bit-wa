import React, { Component } from 'react';
import '../App.css';
import Header from './partials/header.js';
import UserList from './users/userList';
import usersData from './users.js';
import Footer from './partials/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="React Users"/>
        <UserList items={usersData}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
