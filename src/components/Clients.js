import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../styles/Clients.css'
import Axios from 'axios';
import Lslogic from '../logic/LocalStorage'
import Client from './Client/Client';
import Popup from './Client/Popup';
import Options from './Client/Options';
class Clients extends Component {
    state = {
        data: [],
        indexer: [],
        input: localStorage.filter || ``,
        client: {
            popup: false
        }
    }
    fetchData = async () => {
        let data = await Axios.get(`http://localhost:4000/clients`).catch(err => console.log(err))
        this.setState({ data: data.data })
    }
    clientChange = (type, data) => {
        let newClient={...this.state.client}
        newClient[type]=data
        this.setState({client:newClient})
    }
    componentDidMount = async () => {
        await this.fetchData()
        this.onUpdate()
    }
    onUpdate=()=>{
        let newData = Lslogic.sorter(this.state.data, ``, `name`)
        let newIndexer = Lslogic.filter(this.state.data, ``)
        this.setState({
            data: newData,
            indexer: newIndexer
        })
    }
    sorter = (type)=> {
        let newData = Lslogic.sorter(this.state.data,type)
        let newIndexer = Lslogic.filter(this.state.data)
        this.setState({
            data: newData,
            indexer: newIndexer
        })
    }
    filter = e => {//using startswith() is n^2, using tree can be less , use tree?
        // fliter has 2 params: place-is place , param -looking for(localStorge.filter)
        if (!e.target.value) {
            Lslogic.filterRes()
        }
        let newIndexer = Lslogic.filter(this.state.data, e.target.value)
        this.setState({
            indexer: newIndexer,
            input: e.target.value
        })
    }
    popupCheck = (client) => {
        console.log(client)
        if (!this.state.client.popup) {
            client.popup = true
        } else {
            client.popup = false
        }
        this.setState({ client: client })
        // console.log(client)
        if(!client.popup){
            this.updateClient(client)
        }
    }
    updateClient=(client)=>{
        const index = client.index
        delete client.index
        Axios.put(`http://localhost:4000/client`,client)
        .then((res)=>{
            console.log(`done`)
            console.log(this.state.data[index])
            let newData = [...this.state.data]
            newData[index] = client
            this.setState({data:newData})
            // console.log(this.state.data[index])
            this.onUpdate()
        })
    }
    render() {
        return (
            <div>
                { this.state.client.popup && <Popup clientChange={this.clientChange} client={this.state.client} popupCheck={this.popupCheck} /> }
                <input type="text" placeholder="Search" value={this.state.input} onChange={this.filter} />
               <Options sorter={this.sorter}/>
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
                        let index=client
                        client = this.state.data[client]
                        client.index = index
                        return (
                            <Client key={client._id} client={client} popupCheck={this.popupCheck} />
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