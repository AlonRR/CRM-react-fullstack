import React, { Component } from 'react'
import Axios from 'axios';
// import { BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom'
// import '../../../styles/NewClients.css'
class NewClients extends Component {
    newClients=()=>{
        let number = 0
    }
    render() {
        return (
            <div>
                {this.props.newClients}
            </div>
)
    }
}
export default NewClients