import React, { Component } from "react";

class StudentItem extends Component {
  render() {
    // console.log(this.props.item, this.props.item2);
    return (
      <div className="bg-danger w-25 mb-2">
        <p>{this.props.item.name}</p>
        <button 
        onClick={
          () => this.props._getChosenName(this.props.item.name)}
          >
          Choose
        </button>
      </div>
    );
  }
}

export default StudentItem;
