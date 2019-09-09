import React, { Component } from "react";

export class MyInfo extends Component {
  render() {
    const { myInfo } = this.props;
    return (
      <div>
        <div class="card w-100">
          <div class="card-body">
            <h5 class="card-title">{myInfo.name}</h5>
            <p class="card-text">Email : {myInfo.email}</p>
            <p class="card-text">Phone: {myInfo.phoneNo}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfo;
