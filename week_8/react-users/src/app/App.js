import React, { Component } from 'react';
import '../App.css';
import Header from './partials/header.js';
import Header2 from './partials/header2.js';
import UserList from './users/userList';
import Footer from './partials/footer.js';
import {userService} from '../services/UserService';

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
        <Header2 title="Bit Persons"/>
        <div className="container">
        <UserList items={this.state.users}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
