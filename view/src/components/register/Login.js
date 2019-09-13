import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

export class Login extends Component {
  submitHandler = e => {
    e.preventDefault();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    Axios.post("/login", { email, password })
      .then(res => {
        this.checkResponse(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  checkResponse = res => {
    if (res === "user not existed") alert("user not existed");
    else if (res === "email or password do not match")
      alert("email or password do not match");
    else if (Array.isArray(res) && res.length) {
      const loggedUser = res[0];
      localStorage.setItem("user", JSON.stringify(loggedUser));

      this.props.userLogged(true);

      this.props.history.push({
        pathname: "/",
        state: loggedUser
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group form-box">
          <input
            ref={elem => (this.emailInput = elem)}
            type="email"
            name="email"
            className="animated bounceInLeft input-text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group form-box">
          <input
            ref={elem => (this.passwordInput = elem)}
            type="password"
            name="Password"
            className="animated bounceInLeft  input-text"
            placeholder="Password"
          />
        </div>
        <div className="checkbox clearfix"></div>
        <div className="form-group mb-0">
          <button type="submit" className="btn-md btn-theme btn-block">
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(Login);
