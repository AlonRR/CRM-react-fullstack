import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../../styles/Popup.css'
class Popup extends Component {//props: client:{},popupCheck()
    state = {
        client: {
            name: ``,
            surname: ``,
            country: ``
        }
    }
    componentDidMount = () => {
        let newClient = { ...this.props.client }
        newClient.name = newClient.name.split(` `)
        newClient.surname = newClient.name[1]
        newClient.name = newClient.name[0]
        // console.log(newClient)
        this.setState({ client: newClient })
    }
    popupCheck = e => {
        this.props.popupCheck(this.props.client)
    }
    updateCheck = e => {
        let newClient = { ...this.state.client }
        newClient.name = newClient.name.concat(` `, newClient.surname)
        delete newClient.surname
        this.props.popupCheck(newClient)
    }
    onChange = e => {
        let newClient = {...this.state.client}
        newClient[e.target.id] = e.target.value
        this.setState({client:newClient})
    }
    render() {
        // console.log(this.state)
        return (
            <div className="popup">
                <div className="popup-box">
                    <span onClick={this.popupCheck} id="x">X</span>
                    <span>Name</span>
                    <input type="text" id="name" value={this.state.client.name} onChange={this.onChange} />
                    <span>Surname</span>
                    <input type="text" id="surname" value={this.state.client.surname} onChange={this.onChange} />
                    <span>Country</span>
                    <input type="text" id="country" value={this.state.client.country} onChange={this.onChange} />
                    <button onClick={this.updateCheck}>Update</button>
                </div>
            </div>
        )
    }
}
export default Popup