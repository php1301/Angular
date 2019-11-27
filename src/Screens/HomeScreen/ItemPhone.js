import React, { Component } from "react";

class ItemPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDescription: true
    };
  }

  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <div className="card bg-light" style={{ width: 300 }}>
              <img
                className="card-img-top"
                src={this.props.phoneItem.hinhAnh}
                alt="Card image"
                style={{ maxWidth: "100%", height: 250 }}
              />
              <div className="card-body text-center">
                <h4 className="card-title text-center">
                  {this.props.phoneItem.tenSP}
                </h4>
                <p
                  className={
                    this.state.isShowDescription ? "d-block" : "d-none"
                  }
                >
                  {this.props.phoneItem.manHinh +
                    " " +
                    this.props.phoneItem.heDieuHanh}
                </p>
                <button className="btn btn-primary">Detail</button>
                <button
                  className="btn btn-info"
                  onClick={this._toggleDescription}
                >
                  Toggle Description
                </button>
                <button
                  href="#"
                  className="btn btn-danger"
                  onClick={() =>
                    this.props._getProductName(this.props.phoneItem.tenSP)
                  }
                >
                  Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _toggleDescription = () => {
    this.setState({
      isShowDescription: !this.state.isShowDescription
    });
  };
}

export default ItemPhone;
