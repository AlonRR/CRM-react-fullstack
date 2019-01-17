import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../styles/Clients.css'
import Axios from 'axios';
import Lslogic from '../logic/LocalStorage'
import Client from './Client/Client';
import Popup from './Client/Popup';
class Clients extends Component {
    state = {
        data: [],
        indexer: [],
        input: localStorage.filter || ``,
        client:{
            popup:false,
        }
    }
    fetchData = async () => {
        let data = await Axios.get(`http://localhost:4000/clients`).catch(err => console.log(err))
        this.setState({ data: data.data })
    }
    componentDidMount = async () => {
        await this.fetchData()
        let newData = Lslogic.sorter(this.state.data, ``, `name`)
        let newIndexer = Lslogic.filter(this.state.data, ``)
        this.setState({
            data: newData,
            indexer: newIndexer
        })
    }
    sorter = e => {
        let newData = Lslogic.sorter(this.state.data, e.target.value)
        let newIndexer = Lslogic.filter(this.state.data)
        this.setState({
            data: newData,
            indexer: newIndexer
        })
    }
    filter = e => {//using startswith() is n^2, using tree can be less , use tree?
        // fliter has 2 params: place-is place , param -looking for(localStorge.filter)
        if(!e.target.value){
            Lslogic.filterRes()
        }
        let newIndexer = Lslogic.filter(this.state.data, e.target.value)
        this.setState({
            indexer: newIndexer,
            input: e.target.value
        })
    }
    popupCheck=(client={})=>{
        if(!this.state.client.popup){
            client.popup = true
        }else{
            client.popup = false            
        }
        this.setState({client:client})
    }
    render() {
        return (
            <div>
                <Popup client={this.state.client} popupCheck={this.popupCheck}/>
                <input type="text" placeholder="Search" value={this.state.input} onChange={this.filter} />
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
                    <span>Surname</span>
                    <span>Country</span>
                    <span>First Contact</span>
                    <span>E-mail</span>
                    <span>Sold</span>
                    <span>Owner</span>
                </div>
                <div id="parent">
                    {/* {this.state.data.length < 1 ? ( */}
                    {this.state.indexer.map(client => {
                        client = this.state.data[client]
                        return (
                            <Client client={client} popupCheck={this.popupCheck}/>
                        )
                    })}
                    {/* ) : (
                            <div className="spinner">
                                <div className="cube1"></div>
                                <div className="cube2"></div>
                            </div>
                        )} */}
                </div>
            </div>
        )
    }
}
export default Clients