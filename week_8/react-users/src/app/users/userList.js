import React, { Component } from 'react';
import UserItem from './userInfo.js';
import UserItem2 from './userCard.js';


const UserList = (props) => {
    return (
            <div className="row">
            {props.items.map((item, i)=> <UserItem2 key={i} user={item}/>)}   
        </div>

        
    )

}


export default UserList; 