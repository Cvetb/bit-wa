import React, { Component } from 'react';
import usersData from '../users.js';

const User = (props) => {
    return (
        
            <ul className="collection">
    <li className="collection-item avatar">
            <img className="circle" src={props.item.picture.thumbnail}/>
            <p>name: {props.item.name.first}</p>
            <p>email: {props.item.email}</p>
            <p>date of birth: {props.item.dob}</p>
            </li>
        </ul>
        
    )
}

export default User; 