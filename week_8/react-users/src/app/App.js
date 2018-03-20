import React, { Component } from 'react';
import '../App.css';
import Header from './partials/header.js';
import UserList from './users/userList';
import Footer from './partials/footer.js';
import {userService} from '../services/UserService';
import User from '../entities/User';

class App extends Component {
constructor(props){
  super(props);
  this.state = {users: []}
}
componentDidMount(){
  userService.fetchUser().then(userData =>{
    this.setState({
      users: userData
    })
  })
}


  render() {
    return (
      <div className="App">
        <Header title="React Users"/>
        <div className="container">
        <UserList items={this.state.users}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
