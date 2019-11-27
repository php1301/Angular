import React, { Component } from "react";
import StudentItem from "./StudentItem";

const students = [
  { id: 1, name: "hieu" },
  { id: 1, name: "dung" },
  { id: 1, name: "tai" }
];

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenName: ""
    };
  }

  render() {
    return (
      <div>
        {this._renderStudent()}
        <p>Chosen Student: {this.state.chosenName} </p>
      </div>
    );
  }
  _renderStudent = () => {
    return students.map((student, index) => (
      <StudentItem
        _getChosenName={this._getChosenName}
        key={index}
        item={student}
      />
    ));
  };

  _getChosenName = name => {
    console.log("name get from student item", name);
    this.setState({
      chosenName: name
    });
  };
}

export default StudentList;
