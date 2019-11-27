import React, { Component } from "react";
import ItemPhone from "./ItemPhone";

const mangSanPham = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: 'AMOLED, 6.2", Full HD+',
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/sp_note7.png"
  },

  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/sp_iphoneX.png"
  },

  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/sp_vivo850.png"
  }
];

class SmartPhone extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">{this._renderPhoneItem()}</div>
        </section>
      </div>
    );
  }
  _renderPhoneItem = () => {
    const phoneItemArr = mangSanPham.map((item, index) => {
      return (
        <div
          key={index}
          className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3"
        >
          <ItemPhone _getProductName={this.props._getProductName} phoneItem={item}></ItemPhone>
        </div>
      );
    });
    return phoneItemArr;
  };
}

export default SmartPhone;
