import React, { Component } from "react";

export class MyInfo extends Component {
  render() {
    const { myInfo } = this.props;
    return (
      <div>
        <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title">{myInfo.name}</h5>
            <p className="card-text">Email : {myInfo.email}</p>
            <p className="card-text">Phone: {myInfo.phone}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfo;
