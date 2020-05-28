import React, { Component } from 'react'

export default class StampContainerImage extends Component {
    render() {
        const imgStyles = {
            maxWidth: '100%',
            maxHeight: '100%',
            margin: '5px',
            borderRadius: '30%'
        }
        return (
            <div className="StampContainerImage">
                <img src={this.props.imagePath} style={imgStyles} alt="StampPic"/>
            </div>
        )
    }
}