import React, { Component } from 'react';
import {userService} from '../../services/UserService';

const UserItem = (props) => {
    return (
        
            <ul className="collection">
                <li className="collection-item avatar">
            <img className="circle" alt="" src={props.user.photo}/>

            <p>{props.user.name}</p>
            <p><i className="material-icons">email</i> email: {props.user.email}</p>
            <p><i className="material-icons">cake</i> {props.user.date}</p>
                </li>
            </ul>
        
    )
}

export default UserItem; 