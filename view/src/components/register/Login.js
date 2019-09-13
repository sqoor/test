import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

export class Login extends Component {
  loginHandler = e => {
    e.preventDefault();

    const email = this.loginEmail.value;
    const password = this.loginPass.value;

    Axios.post("/login", { email, password })
      .then(res => {
        this.existCases(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  existCases = userCase => {
    if (userCase === "user not existed") alert("user not existed");
    else if (userCase === "email or password do not match")
      alert("email or password do not match");
    else if (Array.isArray(userCase) && userCase.length) {
      // set localstorage  // DONE
      // redirect to home page
      // check the browser
      // set localstorage as object // JSON.stringify
      // get localstorage as object // JSON.parse
      // JSON.parse(localStorage.user)

      const user = userCase[0];
      localStorage.setItem("user", JSON.stringify(user));

      this.props.userLogged(true);

      this.props.history.push({
        pathname: "/",
        state: user
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.loginHandler}>
        <div className="form-group form-box">
          <input
            ref={elem => (this.loginEmail = elem)}
            type="email"
            name="email"
            className="animated bounceInLeft input-text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group form-box">
          <input
            ref={elem => (this.loginPass = elem)}
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
