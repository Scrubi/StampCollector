import React, { Component } from 'react'
import EditStampForm from '../EditStampForm'

export default class AddStampContainer extends Component {
    
    render() {
        return (
            <div>
                <EditStampForm  stamp={this.props.stamp} addStampToCollection={this.props.addStampToCollection}/>
            </div>
        )
    }
}