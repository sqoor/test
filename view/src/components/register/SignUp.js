import React, { Component } from "react";
import Axios from 'axios';

export class SignUp extends Component {

    signupHandler = e => {
        e.preventDefault();
    
        const newUser = {
          name: this.name.value,
          email: this.email.value,
          phone: this.phone.value,
          password: this.password.value,
          image: this.image.value
        };
    
        if (!(newUser.email && newUser.phone && newUser.password))
          return alert("empty fields");
    
        Axios.post("/signup", newUser)
          .then(res => {
            this.signUpCases(res.data);
          })
          .catch(err => console.log(err));
      };
    
      signUpCases(userCase) {
        if (userCase === "this email already have an account")
          return alert("this email already have an account");
        else if (typeof userCase === "object") {
          const user = userCase;
          localStorage.setItem("user", JSON.stringify(user));
    
          this.props.userLogged(true);
    
          this.props.history.push({
            pathname: "/",
            state: user
          });
        }
      }

  render() {
    return (
      <form onSubmit={this.loginHandler} action="" method="GET">
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

export default SignUp;
