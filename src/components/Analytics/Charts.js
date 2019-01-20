import React, { Component } from 'react'
import HottestCountry from './Badges/HottestCountry';
// import { BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom'
// import '../styles/Charts.css'
class Charts extends Component {
    render() {
        return (
            <div>
            {this.props.hottestCountry?<HottestCountry hottestCountry={this.props.hottestCountry} />:null}
            </div>
        )
    }
}
export default Charts