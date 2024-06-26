import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1>Pet Care and Adoption</h1>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    {/* Add more navigation links if needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
