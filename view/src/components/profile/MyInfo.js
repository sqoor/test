import React, { Component } from "react";

export class MyInfo extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Email : {email}</p>
            <p className="card-text">Phone: {phone}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfo;
