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
      
            <div class="collection">
            <Link to="/author" class="collection-item blue-grey-text text-darken-4"><i class="medium material-icons circle orange-text text-darken-3">account_circle</i><h5>Name Surname</h5></Link>
            <Link to="/author" class="collection-item blue-grey-text text-darken-4"><i class="medium material-icons circle orange-text text-darken-3">account_circle</i><h5>Name Surname</h5></Link>
            <Link to="/author" class="collection-item blue-grey-text text-darken-4"><i class="medium material-icons circle orange-text text-darken-3">account_circle</i><h5>Name Surname</h5></Link>
            <Link to="/author" class="collection-item blue-grey-text text-darken-4"><i class="medium material-icons circle orange-text text-darken-3">account_circle</i><h5>Name Surname</h5></Link>
          </div>
               
      </div>
      </div>
      <Footer/>
      </div>
    )
}
export default Author;