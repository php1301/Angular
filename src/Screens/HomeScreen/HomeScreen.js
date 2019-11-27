import React from "react";
// import Logo from "../../img/logo.jpg";
import "./style.css";
import Header from "../../Layout/Header";
import Carousel from "../../Layout/Carousel";
import SmartPhone from "./SmartPhone";
import Laptop from "./Laptop";
import Promotion from "./Promotion";
class HomeScreen extends React.Component {
  // title = "Shopping Online";
  render() {
    return (
      <div className="bg-dark">
        <div>
          {/* <h1 className="display-4 text-center"> {title} </h1> */}
          <p className="text-white">Chosen Product:</p>
          {/* <img src={} /> */}
          <Header></Header>
          <Carousel></Carousel>
          <SmartPhone _getProductName={this._getProductName}></SmartPhone>
          <Laptop></Laptop>
          <Promotion></Promotion>
        </div>
      </div>
    );
  }
  _getProductName = name => {
    console.log("name get from smart phone item", name);
  };
}
export default HomeScreen;
