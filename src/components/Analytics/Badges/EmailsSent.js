import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
// import '../styles/EmailsSent.css'
class EmailsSent extends Component {
    state = {

    }
    render() {
        return (
            <div>
                E-mails sent {this.props.emailsSent}
            </div>
        )
    }
}
export default EmailsSent