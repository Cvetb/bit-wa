import React, { Component } from 'react';
import UserList from './users/userList';
import UserGrid from './users/userGrid';
import '../App.css';
import Header from './partials/header';
import Footer from './partials/footer.js';
import {userService} from '../services/UserService';


class Home extends Component {
    constructor(props){
        super(props);
      
        this.state = {
          users: [],
      
          showGrid:JSON.parse(localStorage.getItem('showGrid')) || false
        }
      }
      
        componentDidMount(){
          this.fetchUsers();
      
          this.setState({
            showGrid: true
          })
        }
        
        fetchUsers = () => {
          userService.fetchUser()
          .then(userData =>{
            this.setState({
              users: userData,
              
            })    
          })
        }
      
        updateClick = (event) => {
          this.fetchUsers();
        }
      
        handleClick = (event) => {
          localStorage.setItem('showGrid', JSON.stringify(!this.state.showGrid));
          this.setState((prevState) => {
           return {
             
            showGrid: !prevState.showGrid
      
           }
         }) 
        }
      
        render() {
          return (
            <div className="App">
              <Header title="Bit Persons" handleClick={this.handleClick} updateClick={this.updateClick} showList={this.state.showGrid}/>
              
              <div className="container">
    
                    {this.state.showGrid ? <UserGrid items={this.state.users}/> : <UserList items={this.state.users}/>}

            </div>
              <Footer/>
            </div>
            
          );
        }
      }
      
      export default Home;