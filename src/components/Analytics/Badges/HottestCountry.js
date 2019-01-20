import React, { Component } from 'react'
// import { BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom'
import '../../../styles/HottestCountry.css'
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend, CartesianGrid } from 'recharts'
class HottestCountry extends Component {//props:{ hottestCountry:{}}
    state = {
        hottestCountry: [
            { name: ``, num: `` }
        ]
    }
    componentDidMount = () => {
        this.sxa()
    }
    sxa = () => {
        let hottestCountry = { ...this.props.hottestCountry }
        let newCountry = []
        for (let name in hottestCountry) {
            console.log(name)
            newCountry.push({ name: name, num: hottestCountry[name] })
        }
        newCountry= newCountry.sort((c1,c2)=>c1.num>c2.num?1:-1)
        this.setState({ hottestCountry: newCountry })
        console.log(newCountry)
    }
    // disp = () => {
    //     return (
            
    //     )
    // }
    render() {
        return (
            <div id="hottest-country">
                <BarChart width={1000} height={400} data={this.state.hottestCountry} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey="num" fill="#8884d8" />
                </BarChart>
            </div>
        )
    }
}
export default HottestCountry