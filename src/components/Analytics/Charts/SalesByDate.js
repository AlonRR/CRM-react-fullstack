import React, { Component } from 'react'
// import { BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom'
import { LineChart, XAxis, YAxis, Line, Tooltip, ResponsiveContainer } from 'recharts'
import '../../../styles/SalesByDate.css'
class SalesByDate extends Component {
    render() {
        return (
            <div id="sales-chart">
                <ResponsiveContainer width="100%" height={300} >
                    <LineChart data={this.props.sales} >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="num" stroke="#8884d7" />
                    </LineChart >
                </ResponsiveContainer>
            </div>
        )
    }
}
export default SalesByDate