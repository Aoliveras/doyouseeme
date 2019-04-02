import React from 'react';
import { Link } from 'react-router-dom';

export default (Layout) => {
    return (
        <div className="column">
            <nav className="ui inverted red huge menu">
                <Link className="item" to="/">doyouSEEme.com</Link>
                <Link className="red item" to="/about">About</Link>
                <div className="right menu">
                    <Link className="red item" to="/art">Art</Link>
                    <Link className="red item" to="/dreamBoard">Dream Board</Link>
                </div>
            </nav>
        </div>
    )
};