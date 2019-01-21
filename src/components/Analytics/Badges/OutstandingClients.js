import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
// import '../styles/OutstandingClients.css'
class OutstandingClients extends Component {
    render() {
        return (
            <div>
                Outstanding Clients {this.props.outstandingClients}
            </div>
        )
    }
}
export default OutstandingClients