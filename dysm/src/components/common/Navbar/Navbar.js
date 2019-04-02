import React from 'react';
import { Link } from 'react-router-dom';

export default (Layout) => {
    return (
        <div className="column">
            <nav className="ui inverted teal huge menu">
                <Link className="item" to="/">doyouseeme.com</Link>
                <Link className="teal item" to="/about">About</Link>
                <Link className="teal item" to="/art">Art</Link>
                <Link className="teal item" to="/dreamBoard">Dream Board</Link>
            </nav>
        </div>
    )
};