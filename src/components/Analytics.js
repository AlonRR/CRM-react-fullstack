import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../styles/Analytics.css'
import Axios from 'axios';
import Charts from './Analytics/Charts';
import Badges from './Analytics/Badges'
class Analytics extends Component {
    state = {
        analytics: {
            badges: {
                hottestCountry: ``,
                newClients: ``,
                outstandingClients: ``,
                emailsSent: ``,
            },
            // data: {
                // country:{},
                // owner:{},
                // month:{}
            // },
            // sales:[]
        }
    }
    componentDidMount = async () => {
        await this.fetchData()
    }
    fetchData = () => {
        console.log(`here`)
        Axios.get(`http://localhost:4000/analytics`)
            .then(res => {
                this.setState({ analytics: res.data })
                console.log(res)
            })
    }
    render() {
        return (
            <div>
                <Badges badges={this.state.analytics.badges} />
                {this.state.analytics.data?<Charts data={this.state.analytics.data}  sales={this.state.analytics.sales} />:null}
                {/* Analytics here */}
            </div>
        )
    }
}
export default Analytics