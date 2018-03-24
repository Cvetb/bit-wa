import React from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import { Link } from 'react-router-dom';
const CreatePost = (props) => {
    return (
        <div>
        <Header/>
        <div className="row">
        <br/>
        <br/>
        <br/>
        <h5 className="center">NEW POST</h5>
      <form className="col s12">
        
  <div className="row">
  <br/>
  <div className="input-field col s8 offset-s2">
    <input value="" id="first_name2" type="text" />
    <label className="active" >Title</label>
        </div>
        </div>
        <div className="row">
  <div className="input-field col s8 offset-s2">
    <input value="" id="first_name2" type="text"/>
    <label className="active" >Content</label>
        </div>
        <Link to="/" class="waves-effect orange darken-3 btn col s1 offset-s7">Cancel</Link>
      <Link to="/" class="waves-effect orange darken-3 btn col s1 offset-s1">Save</Link>
        </div>
      </form>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <Footer/>
      </div>
    )}

    export default CreatePost;