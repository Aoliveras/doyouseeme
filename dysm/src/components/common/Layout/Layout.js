import React from 'react';
import Navbar from '../Navbar/Navbar';

export default ({ children }) => {
    return (
        <div className="ui container">
            <img src={require("./dysm_icon.png")} alt="dysm_icon" style={{ display: "block", margin: "20px auto" }} />
            <Navbar />
            <div className="ui container">
                { children }
            </div>
        </div>
    )
};