import React, { Component } from 'react'
import EmailsSent from './Badges/EmailsSent';
import NewClients from './Badges/NewClients';
import OutstandingClients from './Badges/OutstandingClients';
import HottestCountry from './Badges/HottestCountry';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../../styles/Badges.css'
class Badges extends Component {//props: { badges: { hottestCountry:``, newClients:``, outstandingClients:``, emailsSent:`` }}
    render() {
        let badges = this.props.badges
        return (
            <div id="badges">
                <HottestCountry hottestCountry={badges.hottestCountry}/>
                <EmailsSent emailsSent={badges.emailsSent}/>
                <NewClients newClients={badges.newClients}/>
                <OutstandingClients outstandingClients={badges.outstandingClients}/>
            </div>
        )
    }
}
export default Badges