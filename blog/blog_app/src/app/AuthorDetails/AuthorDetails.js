import React from 'react';
import AuthorInfo from "./AuthorsInfo";
import AuthorAddress from "./AuthorAddress";
import AuthorCompany from "./AuthorCompany";
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import { Link } from 'react-router-dom';

const AuthorDetails = (props) => {
    return (
        <div>
            <Header />
            <div className="container">
            <Link to="/authors" class="waves-effect deep-purple accent-3 btn"><i class="material-icons left">chevron_left</i>Back</Link>
            </div>
            <AuthorInfo />
            <AuthorAddress />
            <AuthorCompany />
            <Footer />

        </div>

    )
}

export default AuthorDetails;