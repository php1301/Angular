import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import component
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import StudentList from "./TransferDataDemo/StudentList";

function App() {
  return (
    <div className="App">
      {/* <StudentList /> */}
      <HomeScreen></HomeScreen>
    </div>
  );
}

export default App;
