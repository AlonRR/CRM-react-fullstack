import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import '../styles/NavBar.css'
class NavBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <Link to="/clients">Clients</Link>
                <Link to="/actions">Actions</Link>
                <Link to="/analytics">Analytics</Link>
            </div>
        )
    }
}
export default NavBar