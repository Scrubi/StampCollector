import React, { Component } from "react";
import { Stamp } from "../classfiles/Stamp";

export default class StampContainerData extends Component {
  render() {
    var stamp = new Stamp();
    Object.assign(stamp, this.props.stampData);
    const DataHeader = {
      color: "yellow",
      backgroundColor: "#181717",
      borderStyle: "solid",
      borderColor: "#181717",
      borderRadius: "30%",
      width: "80%",
      textAlign: "center",
    };
    const DataText = {
      position: "relative",
      textAlign: "center",
      right: "50px",
    };
    return (
      <div className="StampContainerData">
        <div style={DataHeader}>Name</div>
        <div style={DataText}>{stamp.name}</div>

        <div style={DataHeader}>Price</div>
        <div style={DataText}>{stamp.GetPriceString()} €</div>

        <div style={DataHeader}>Country</div>
        <div style={DataText}>{stamp.country}</div>

        <div style={DataHeader}>Year Published</div>
        <div style={DataText}>{stamp.yearPublished}</div>

        <div style={DataHeader}>Is Stamped</div>
        <div style={DataText}>{String(stamp.isStamped)}</div>
      </div>
    );
  }
}
