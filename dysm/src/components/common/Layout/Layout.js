import React from 'react';
import Navbar from '../Navbar/Navbar';

export default ({ children }) => {
    return (
        <div className="ui container">
            <h1>Do You SEE Me?</h1>
            <Navbar />
            <div className="ui container">
                { children }
            </div>
        </div>
    )
};