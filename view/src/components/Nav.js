import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Nav.css';


export class Nav extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/admin/login">Admin Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav
