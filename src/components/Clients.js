import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../styles/Clients.css'
import Axios from 'axios';
class Clients extends Component {
    state = {
        data: [],
    }
    fetchData = async () => {
        let data = await Axios.get(`http://localhost:4000/clients`).catch(err => console.log(err))
        // console.log(data.data)
        this.setState({ data: data.data })
        // setTimeout(() => {
        //   let data = require('../react-crm-starter-master/data.json')
        //   //populate state with data
        //   this.setState({data:data})
        // }, 100)
    }
    componentDidMount = async () => {
        await this.fetchData()
        this.sorter()
    }
    sorter = e => {
        if(!localStorage.sortType){
            // console.log(`got it`)
            localStorage.setItem(`sortType`,`name`)
        }
        let type = localStorage.sortType
        let check = false
        if (e) {
            type = e.target.value
            localStorage.setItem(`sortType`,type)
        } 
        console.log(type)
        const sortData = [...this.state.data]
        sortData.sort((c1, c2) => {
            if (type == `sername`) {
                type = `name`
                check = true
            }
            if (!c1[type]) { return 1 }
            if (!c2[type]) { return -1 }
            let thing1 = c1[type].toUpperCase()
            let thing2 = c2[type].toUpperCase()
            if (check) {
                thing1 = thing1.split(` `)[1]
                thing2 = thing2.split(` `)[1]
            }
            // console.log(thing1)
            return thing1 > thing2 ? 1 : thing2 > thing1 ? -1 : 0
        })
        this.setState({ data: sortData })
    }
    render() {
        // console.log(this.props.state.data)
        // this.props.fetchData
        return (
            <div>
                <select onChange={this.sorter} defaultValue={localStorage.sortType}>
                    <option value="name">Name</option>
                    <option value="country">Country</option>
                    <option value="firstContact">First Contact</option>
                    <option value="emailType">E-mail</option>
                    <option value="owner">Owner</option>
                    <option value="sername">Sername</option>
                </select>
                <div className="client-table" id="table-top" >
                    <span>Name</span>
                    <span>Sername</span>
                    <span>Country</span>
                    <span>First Contact</span>
                    <span>E-mail</span>
                    <span>Sold</span>
                    <span>Owner</span>
                </div>
                <div id="parent">
                    {this.state.data.map(client => {
                        return (
                            <Link to={`/client/${client._id}`} className="client-table" id="table-body">
                                <span>{client.name.split(` `)[0]}</span>
                                <span>{client.name.split(` `)[1]}</span>
                                <span>{client.country}</span>
                                <span>{client.firstContact}</span>
                                <span>{client.emailType}</span>
                                <span>{`${client.sold}`}</span>
                                <span>{client.owner}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Clients