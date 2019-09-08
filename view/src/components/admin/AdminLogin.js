import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

export class AdminLogin extends Component {
  sumbitHandler = e => {
    e.preventDefault();

    console.log(this.props);

    const email = this.email.value;
    const password = this.password.value;

    axios
      .post("/admin/login", { email, password })
      .then(res => {
        console.log(res.data);
        if (res.data === true) {
          console.log("redirected");
          this.props.history.push("/admin", { adminId: "1234" });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <form className="form-group w-50" onSubmit={this.sumbitHandler}>
          <h3 className="my-3">Admin Login Page</h3>
          <input
            ref={elem => (this.email = elem)}
            type="email"
            className="form-control my-2"
          />
          <input
            ref={elem => (this.password = elem)}
            type="password"
            className="form-control my-2"
          />
          <button className="btn btn-primary btn-block my-2">Login</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AdminLogin);
