import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../styles/Actions.css'
import Axios from 'axios';
import moment from 'moment';
class Actions extends Component {
    state = {
    }
    fetchData = () => {

    }
    addClient=()=>{
        let data={...this.state}
        data.name = data.name.concat(` `,data.surname)
        delete data.surname
        data.emailType = `p`
        data.sold = false
        data.firstContact=moment()
        console.log(data)
        Axios.post(`http://localhost:4000/client`,data).then()
    }
    handelChange=e=>{
        this.setState({[e.target.id]:e.target.value})
    }
    render() {
        return (
            <div>
                <div className="update">
                    <h1>Update</h1>
                    <span>Client:</span>
                    <input id="name"type="text" placeholder="Client Name" />
                    <span>transfer ownership to</span>
                    <input id="owner" type="text" />
                    <button>Transfer</button>
                    <span></span>
                    <span>Send email:</span>
                    <input type="text" />
                    <button>Send</button>
                </div>  
                <div className="add">
                    <h1>Add Client</h1>
                    <span>First Name:</span>
                    <input type="text" id="name" onChange={this.handelChange}/>
                    <span>Surname</span>
                    <input type="text" id="surname" onChange={this.handelChange}/>
                    <span>Country</span>
                    <input type="text" id="country" onChange={this.handelChange}/>
                    <span>Owner</span>
                    <input type="text" id="owner" onChange={this.handelChange}/>
                    <span>E-mail</span>
                    <input type="text" id="email" onChange={this.handelChange}/>
                    <button onClick={this.addClient}>Add New Client</button>
                </div>
            </div>
        )
    }
}
export default Actions