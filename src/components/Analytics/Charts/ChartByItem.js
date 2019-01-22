import React, { Component } from 'react'
// import { BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom'
import '../../../styles/ChartByItem.css'
import { BarChart, XAxis, YAxis, Bar, Tooltip, Text ,ResponsiveContainer} from 'recharts'
class Item extends Component {//props:{ item:{}}
    render() {
        return (
            <div id="item-chart">
                <ResponsiveContainer width="100%" height={300} >
                    <BarChart data={this.props.item}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" interval={0} textAnchor="start" angle={45} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="num" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                {/* im there */}
            </div>
        )
    }
}
export default Item