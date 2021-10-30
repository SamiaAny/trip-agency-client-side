import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    let history = useHistory();
    const handleChange = () => {
        history.push('/home');
    }
    return (
        <div className="error-page p-5">
            <div className="text-404">
                <h1 className="text">Oops!</h1>
                <p>404 - Page not found</p>
            </div>
            <button onClick={handleChange} className="error-btn text-center">Go Home</button>
        </div>
    );
};

export default NotFound;