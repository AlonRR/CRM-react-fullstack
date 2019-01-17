import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../../styles/Client.css'
class Client extends Component {//props: client:{}, popupCheck()
    popupCheck=()=>{
        this.props.popupCheck(this.props.client)
    }
    render() {
        const client = this.props.client
        return (
            <div className="client-table" id="table-body" key={client._id} onClick={this.popupCheck}>
                <span>{client.name.split(` `)[0]}</span>
                <span>{client.name.split(` `)[1]}</span>
                <span>{client.country}</span>
                <span>{client.firstContact}</span>
                <span>{client.emailType}</span>
                <span>{`${client.sold}`}</span>
                <span>{client.owner}</span>
            </div>
        )
    }
}
export default Client
