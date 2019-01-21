import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
// import '../styles/HottestContry.css'
class HottestCountry extends Component {
    state = {

    }
    render() {
        return (
            <div>
                The Hottest Country is {this.props.hottestCountry}
            </div>
        )
    }
}
export default HottestCountry