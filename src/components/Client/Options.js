import React, { Component } from 'react'
// import { BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom'
// import '../../styles/Options.css'
class Options extends Component {
    sorter=e=>{
        this.props.sorter(e.target.value)
    }
    render() {
        return (
            <select onChange={this.sorter} defaultValue={localStorage.sortType}>
                <option value="name">Name</option>
                <option value="country">Country</option>
                <option value="firstContact">First Contact</option>
                <option value="emailType">E-mail</option>
                <option value="owner">Owner</option>
                <option value="surname">Surname</option>
            </select>
        )
    }
}
export default Options