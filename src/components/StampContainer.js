import React, { Component } from 'react'
import '../styles/StyleSheet.css'
import StampData from './StampContainerData'
import StampImage from './StampContainerImage'
import {NavLink} from 'react-router-dom'

export default class StampContainer extends Component {
    
    constructor(){
        super()
        this.state = {
            showFull:false
        }
    }

    headerClicked = () =>{
        this.setState(
            {showFull:!this.state.showFull}
        )
    }

    render() {
       
        return (
            <div className="col StampContainer" onClick={this.headerClicked}>
                <div className="row StampContainerHeader">
                    <div className='HeaderCol col-1'  hidden={this.state.showFull}>
                        <img src={this.props.stamp.imageUrl} alt="StampPic"/>
                    </div>
                    <div className="HeaderCol StampHeader" >
                        {this.props.stamp.name}
                    </div>
                    <div className="HeaderCol col text-right" hidden={this.state.showFull}>
                        {this.props.stamp.GetPriceString()} €
                    </div>
                </div>
               <div className="row" hidden={!this.state.showFull}>
                    <div className="col-4">
                    <StampImage imagePath={this.props.stamp.imageUrl} />
                    </div>
                    <div className="col-8">
                    <StampData stampData = {this.props.stamp}/>
                    <NavLink to={{ pathname:"/addStamp", stamp:this.props.stamp}}><button className="myButton">Edit Stamp</button></NavLink>        

                    </div>
                </div>
            </div>
        )
    }
}