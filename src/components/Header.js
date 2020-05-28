import React, { Component } from 'react'
import '../styles/StyleSheet.css'

export default class Header extends Component {
    render() {
        const headerStyle = {
            color: "yellow",
            backgroundColor: "#282c34",
            padding: "5px",
            borderStyle: "solid", 
            textAlign: "center"      
        }
        return (
            <div>
               <h1 style={headerStyle}>Stamp Collector App</h1> 
            </div>
        )
    }
}