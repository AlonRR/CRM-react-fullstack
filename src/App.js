import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import Clients from './components/Clients';
import Analytics from './components/Analytics';
import Actions from './components/Actions';
import NavBar from './components/NavBar';
class App extends Component {
  render() {
    const state = this.state
    return (
      <Router>
        <div>
          <NavBar />
          <div className="main-body">
            <Redirect exact from="/" to="/clients" />
            <Route exact path="/clients" render={() => <Clients fetchData={this.fetchData} />} />
            <Route exact path="/actions" render={() => <Actions state={state} />} />
            <Route exact path="/analytics" render={() => <Analytics />} />
          </div>
        </div>
      </Router>
    )
  }
}
export default App