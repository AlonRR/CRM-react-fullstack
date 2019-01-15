import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Clients from './components/Clients';
import Analytics from './components/Analytics';
import Actions from './components/Actions';
import Axios from 'axios';
import Client from './components/Client/Client';
// import data from '../react-crm-starter-master/data.json';
class App extends Component {
  state = {
    data: []
  }
  componentDidMount=()=>{
    this.fetchData()
  }
  fetchData=()=>{
    Axios.get(`http://localhost:4000/clients`,(err,res)=>{
      console.log(res,err)
      let newData = res
      this.setState({data:newData})
    })
    // setTimeout(() => {
    //   let data = require('./react-crm-starter-master/data.json')
    //   //populate state with data
    //   this.setState({data:data})
    // }, 100)
  }
  render() {
    const state=this.state
    return (
      <Router>
        <div>
          <div className="top-bar">
            <Link to="/clients">Clients</Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/actions">Actions</Link>
          </div>
          <div className="main-body">
            <Route exact path="/clients" render={() => <Clients fetchData={this.fetchData} />} />
            <Route exact path="/actions" render={() => <Actions state={state}/>} />
            <Route exact path="/analytics" render={() => <Analytics state={state}/>} />
            <Route exact path="/client/:id" render={({match})=><Clients><Client match={match}/></Clients>}/>
          </div>
          </div>
      </Router>
          )
        }
      }
export default App