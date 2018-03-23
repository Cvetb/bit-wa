import React from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

const CreatePost = (props) => {
    return (
        <div>
        <Header/>
        <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="input_text" type="text" />
            <label for="input_text">Input text</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea2" class="materialize-textarea"></textarea>
            <label for="textarea2">Textarea</label>
          </div>
        </div>
      </form>
    </div>

      <Footer/>
      </div>
    )}

    export default CreatePost;