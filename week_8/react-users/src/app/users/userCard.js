import React, { Component } from 'react';
import {userService} from '../../services/UserService';

const UserItem2 = (props) => {
    return (
        <div >
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img alt='' src={props.user.photo}/>
              <span className="card-title">{props.user.name}</span>
            </div>
            <div className="card-content">
              <p>{props.user.email}</p>
              <p>{props.user.date}</p>
            </div>
            
          </div>
        </div>
      </div>
                
    )
}

export default UserItem2; 