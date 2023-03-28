import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

function Header() {
    return (
        <header>
            <div className="container">
                <Link to="/">FitnessTracker</Link>
            </div>
            <ul>
                <li>
                    <Link to="/login">
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        <FaUser /> Register
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header

/* Add Logout button Later
                <li>
                    <Link to="/logout">
                        <FaSignOutAlt /> Logout
                    </Link>
                </li>
*/
