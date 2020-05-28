import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import StampListContainer from './pages/StampListContainer'
import About from './pages/About'
import Summary from './pages/Summary'
import AddStamp from './pages/AddStamp'
import '../styles/StyleSheet.css'

export default class MainWindow extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             dataManager:this.props.dataManager,
             stampCollection:this.props.dataManager.stampCollection
        }
    }

    AddStampToCollection = (stamp) =>{
           this.state.dataManager.addStampToCollection(stamp)
          this.UpdateCollection()
    }
    
    UpdateCollection = () => {
        console.log("Updated collection")
        this.setState({
            stampCollection:this.state.dataManager.stampCollection
        })
    }

    render() {
        var list = () => <StampListContainer stampCollection={this.state.stampCollection} />
        var about = () => <About />
        var addStamp = (props) => {
        return <AddStamp stamp={props.location.stamp} addStampToCollection={this.AddStampToCollection} />
        }
        var summary = () => <Summary />
        return (
            <div className="col ">
                <Router>
                <div className="row">
                    <div className="col justify-content-center Links">
                        <Link className="RouterLink" to="/">List</Link> | <Link 
                        className="RouterLink" to="/Summary">Summary</Link> | <Link 
                        className="RouterLink" to="/addStamp">Add Stamp</Link> | <Link 
                        className="RouterLink" to="/About">About</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Route exact path="/" component={list} />
                        <Route path="/Summary" component={summary} />
                        <Route path="/addStamp" component={addStamp} />
                        <Route path="/about" component={about} />
                    </div>
                </div>
                </Router>
            </div>
        )
    }
}