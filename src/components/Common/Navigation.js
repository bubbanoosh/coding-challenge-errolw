import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/" className="btn btn-primary btn-lg">Home</Link>
                    <Link to="/coding-challenge" className="btn btn-primary btn-lg" style={{marginLeft: '1rem'}}>Coding Challenge</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;