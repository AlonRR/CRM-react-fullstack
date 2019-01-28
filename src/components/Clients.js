import React, { Component } from 'react';
import '../styles/Clients.css'
import Axios from 'axios';
import Lslogic from '../logic/LocalStorage'
import Client from './Client/Client';
import Popup from './Client/Popup';
import Options from './Client/Options';
import TableBar from './Client/TableBar';
class Clients extends Component {
    state = {
        data: [],
        indexer: [],
        input: localStorage.filter || ``,
        client: {
            popup: false
        },
        loading: true,
        categories: [`Name`, `Surname`, `Country`, `First Contact`, `E-mail`, `Sold`, `Owner`],
    }
    fetchData = async () => {
        let data = await Axios.get(`http://localhost:4000/clients`).catch(err => console.log(err))
        this.setState({ data: data.data })
    }
    clientChange = (type, data) => {
        let newClient = { ...this.state.client }
        newClient[type] = data
        this.setState({ client: newClient })
    }
    componentDidMount = async () => {
        await this.fetchData()
        this.onUpdate()
    }
    onUpdate = async () => {
        await this._loadingSwitch()
        let newData = Lslogic.sorter(this.state.data, ``, `name`)
        let newIndexer = Lslogic.filter(this.state.data, ``)
        this.setState({
            data: newData,
            indexer: newIndexer,
            loading: false
        })
    }
    sorter = async (type) => {
        await this._loadingSwitch()
        let newData = Lslogic.sorter(this.state.data, type)
        let newIndexer = Lslogic.filter(this.state.data)
        this.setState({
            data: newData,
            indexer: newIndexer,
            loading: false
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
        if (!this.state.client.popup) {
            client.popup = true
        } else {
            client.popup = false
        }
        this.setState({ client: client })
        if (!client.popup) {
            this.updateClient(client)
        }
    }
    updateClient = (client) => {
        const index = client.index
        delete client.index
        Axios.put(`http://localhost:4000/client`, client)
            .then(() => {
                let newData = [...this.state.data]
                newData[index] = client
                this.setState({ data: newData })
                this.onUpdate()
            })
    }
    displayLoadingOrClients = () => {
        if (this.state.loading) {
            return (
                <div className="spinner">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                </div>
            )
        } else {
            return (
                this.state.indexer.map((index) => {
                    let client = this.state.data[index]
                    client.index = index
                    return (
                        <Client key={client._id} client={client} popupCheck={this.popupCheck} />
                    )
                }))
        }
    }
    _loadingSwitch = () => {
        this.setState({ loading: !this.state.loading })
    }
    render() {
        return (
            <div>
                {this.state.client.popup ? <Popup clientChange={this.clientChange} client={this.state.client} popupCheck={this.popupCheck} /> : null}
                <input type="text" placeholder="Search" value={this.state.input} onChange={this.filter} />
                <Options
                    categories={this.state.categories}
                    sorter={this.sorter}
                />
                <TableBar
                    categories={this.state.categories}
                    sorter={this.sorter}
                />
                <div id="parent">
                    {this.displayLoadingOrClients()}
                </div>
            </div>
        )
    }
}
export default Clients