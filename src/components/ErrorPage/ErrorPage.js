import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <section className='body-container'>
            <div class="container">
                <h2>Oops! Page not found.</h2>
                <h1>404</h1>
                <p>We can't find the page you're looking for.</p>
                <Link to='/'>Go back home</Link>
            </div>
        </section>
    );
};

export default ErrorPage;