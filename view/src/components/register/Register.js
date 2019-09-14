import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import SignUp from "./SignUp";
import Login from "./Login";

export class Register extends Component {
  authGurd() {
    let loggedUser = localStorage.user;
    if (loggedUser) loggedUser = JSON.parse(loggedUser);
    if (loggedUser) this.props.history.push("/");
  }

  componentDidMount() {
    this.authGurd();
  }

  loginBtn = () => {
    document.getElementById("login").style.display = "block";
    document.getElementById("signup").style.display = "none";
  };

  signupBtn = () => {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
  };

  render() {
    return (
      <div className="login-10">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-12 col-pad-0 bg-color-10">
              <div className="form-section ">
                <div className="logo">
                  <h3>Welcome To Code Talkerz</h3>
                </div>
                <div className="btn-section">
                  <button className="link-btn active" onClick={this.loginBtn}>
                    Login
                  </button>
                  <button className="link-btn" onClick={this.signupBtn}>
                    signup
                  </button>
                </div>
                <div className="login-inner-form" id="login">
                  <Login userLogged={this.props.userLogged} />
                  <div className="extra-login">
                    <span>Code Talkerz</span>
                  </div>
                </div>
                <div
                  className="login-inner-form "
                  style={{ display: "none" }}
                  id="signup"
                >
                  <SignUp userLogged={this.props.userLogged} />
                  <div className="extra-login">
                    <span>Code Talkerz</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-12 col-pad-0 bg-img none-992">
              <div className="info">
                <h1>Welcome to Code Talkerz</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
