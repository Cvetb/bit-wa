import React, { Component } from 'react';
import usersData from '../users.js';
import User from './user.js';


const UserList = (props) => {
    return (
        
            <div className="container">
            {props.items.map((item, i)=> <User key={i} item={item}/>)}   
        </div>

        
    )

}


export default UserList; 