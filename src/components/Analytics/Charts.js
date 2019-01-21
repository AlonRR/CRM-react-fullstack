import React, { Component } from 'react'
import Item from './Charts/ChartByItem';
import Lslogic from '../../logic/LocalStorage';
import moment from 'moment';
// import { BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom'
// import '../styles/Charts.css'
class Charts extends Component {//props:{ data:{}}
    state = {
        item: localStorage.chartItem || ``,
        type: []
    }
    componentDidMount = () => {
        this.sxa()
    }
    itemSender = async e => {
        let newItem = Lslogic.setItem(e.target.value, `chartItem`, this.state.item)
        await this.setState({ item: newItem })
        this.sxa()
    }
    sxa = () => {
        let item = { ...this.props.data[this.state.item] }
        let newCountry = []
        for (let name in item) {
            newCountry.push({ name: name.replace(` `,`\n`), num: item[name] })
        }
        if (this.state.item !== `month`) {
            newCountry = newCountry.sort((c1, c2) => c1.num > c2.num ? 1 : -1)
            console.log(newCountry)
        } else {
            newCountry = newCountry.map(c => {
                c.name = moment(c.name,`M`).format(`MMM`)
                console.log(c.name)
            return c
            })
            console.log(newCountry)
        }
        this.setState({ type: newCountry })
    }
    render() {
        return (
            <div>
                Sales by
                <select onChange={this.itemSender} defaultValue={this.state.item}>
                    <option value="country">Country</option>
                    <option value="owner">Owner</option>
                    <option value="month">Month</option>
                </select>
                <Item item={this.state.type} />
                {/* hi */}
            </div>
        )
    }
}
export default Charts