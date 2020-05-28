import React, { Component } from 'react'
import StampContainer from '../StampContainer'

export default class StampListContainer extends Component {
    GetStampList = () => Array.from(this.props.stampCollection).map(element => {
      return  <StampContainer stamp={element} key={element.id}/>
    });

    render() {
        return (
            <div>
                {this.GetStampList()}
            </div>
        )
    }
}