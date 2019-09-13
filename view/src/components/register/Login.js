import React, { Component } from "react";
import Axios from 'axios';

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
      <form onSubmit={this.signupHandler} action="" method="GET">
        <div className="form-group form-box">
          <input
            ref={elem => (this.name = elem)}
            type="text"
            name="name"
            className="animated bounceInLeft  input-text"
            placeholder="User Name"
          />
        </div>
        <div className="form-group form-box">
          <input
            ref={elem => (this.email = elem)}
            type="email"
            name="email"
            className="animated bounceInLeft input-text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group form-box">
          <input
            ref={elem => (this.phone = elem)}
            type="phone"
            name="number"
            className="animated bounceInLeft  input-text"
            placeholder="phone Number"
          />
        </div>
        <div className="form-group form-box">
          <input
            ref={elem => (this.password = elem)}
            type="password"
            name="Password"
            className="animated bounceInLeft  input-text"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-box image">
          <div className="image-file animated bounceInLeft">
            <input
              ref={elem => (this.image = elem)}
              accept="image/png, image/jpeg"
              name="imgUrl"
              type="file"
              className="custom-file-input"
              id="imageInput"
              aria-describedby="imageInput"
            />
            <label
              className="custom-file-label text-left text-muted"
              htmlFor="imageInput"
            >
              Upload your image
            </label>
          </div>
        </div>
        <div className="checkbox clearfix"></div>
        <div className="form-group mb-0">
          <button type="submit" className="btn-md btn-theme btn-block">
            sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
