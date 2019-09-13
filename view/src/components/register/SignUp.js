import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";


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

    if (!(newUser.name && newUser.email && newUser.phone && newUser.password))
      return alert("empty fields");

    Axios.post("/signup", newUser)
      .then(res => {
        this.checkResponse(res.data);
      })
      .catch(err => console.log(err));
  };

  checkResponse(res) {
    if (res === "this email already have an account")
      return alert("this email already have an account");
    else if (typeof res === "object") {
      const user = res;
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
      <form onSubmit={this.signupHandler} action="" method="GET">
        <div className="form-group form-box">
          <input
            ref={elem => (this.name = elem)}
            type="text"
            name="name"
            className="animated bounceInRight  input-text"
            placeholder="User Name"
          />
        </div>
        <div className="form-group form-box">
          <input
            ref={elem => (this.email = elem)}
            type="email"
            name="email"
            className="animated bounceInRight input-text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group form-box">
          <input
            ref={elem => (this.phone = elem)}
            type="phone"
            name="number"
            className="animated bounceInRight input-text"
            placeholder="phone Number"
          />
        </div>
        <div className="form-group form-box">
          <input
            ref={elem => (this.password = elem)}
            type="password"
            name="Password"
            className="animated bounceInRight input-text"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-box image">
          <div className="image-file animated bounceInRight">
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


export default withRouter(SignUp);
