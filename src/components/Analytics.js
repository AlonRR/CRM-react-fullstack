import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../styles/Analytics.css'
import Axios from 'axios';
import Charts from './Analytics/Charts';
class Analytics extends Component {
    state = {
        analytics: {
            data:{
                hottestCountry: ``
            }
        }
    }
    componentDidMount =async () => {
       await this.fetchData()
    }
    fetchData = () => {
        console.log(`here`)
        Axios.get(`http://localhost:4000/analytics`)
            .then(res => {
                this.setState({ analytics: res })
            })
    }
    render() {
        return (
            <div>
                <Charts hottestCountry={this.state.analytics.data.hottestCountry} />
                Analytics here
            </div>
        )
    }
}
export default Analytics