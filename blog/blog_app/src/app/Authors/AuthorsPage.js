import React from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import {Link} from 'react-router-dom';
const Author = (props) => {
    return(
        <div>
        <Header/>
        <div class="row">
        <h3 className="center">Authors(4)</h3>
        <div class="col s12 m8 offset-m2">
            <ul class="collection">
                <li class="collection-item avatar">
                 <i class="material-icons circle">face</i>
                <Link to="/author" class="title">Title</Link>
                <p>First Line <br/>
                Second Line
                </p>
            </li>
                <li class="collection-item avatar">
                <i class="material-icons circle">face</i>
                <p class="title">Title</p>
                <p>First Line <br/>
                Second Line
                </p>
            </li>
                <li class="collection-item avatar">
                <i class="material-icons circle">face</i>
                <p class="title">Title</p>
                <p>First Line <br/>
                Second Line
                </p>
            </li>
                <li class="collection-item avatar">
                <i class="material-icons circle">face</i>
                <p class="title">Title</p>
                <p>First Line <br/>
                Second Line
                </p>
            </li>
            </ul>
      </div>
      </div>
      <Footer/>
      </div>
    )
}
export default Author;