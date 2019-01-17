import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../../styles/Popup.css'
class Popup extends Component {//props: client:{},popupCheck()
    popupCheck = e => {
        this.props.popupCheck()
    }
    display=()=>{
        if(this.props.client.popup){
            return(
                <div className="popup">
                    <div className="popup-box">
                        <span></span>
                        <input type="text"/>
                        <span></span>
                        <input type="text"/>
                        <span></span>
                        <input type="text"/>
                        <button>Update</button>
                    </div>
                </div>
            )
        } 
    }
    render() {
        let display = this.display()
        return (
            <span>
                {display}
            </span>
        )
    }
}
export default Popup