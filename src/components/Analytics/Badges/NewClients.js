import React, { Component } from 'react'
import moment, { now, isMoment, millisecond } from 'moment';
// import { BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom'
// import '../../../styles/NewClients.css'
class NewClients extends Component {
    state = {
        time: ``
    }
    componentDidMount = () => {
        this.setState({ time: moment(now()).format(`MMMM`) })
    }
    render() {
        return (
            <div>
                New clients as of {this.state.time} {this.props.newClients}
            </div>
        )
    }
}
export default NewClients