import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";

export class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHanlder = this.submitHanlder.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHanlder(e) {
    e.preventDefault();

    const newUser = this.state;

    if (!(newUser.name && newUser.email && newUser.phone && newUser.password))
      return toast.error("Empty input fields!");

    Axios.post("/signup", newUser)
      .then(res => {
        this.checkResponse(res.data);
      })
      .catch(err => console.log(err));
  }

  checkResponse(res) {
    if (res === "this email already have an account")
      return toast.error("This email already have an account!");
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
      <form onSubmit={this.submitHanlder}>
        <ToastContainer
          position={toast.POSITION.TOP_LEFT}
          transition={Zoom}
          toastClassName="rounded"
          hideProgressBar={true}
        />
        <div className="form-group form-box">
          <input
            onChange={this.changeHandler}
            value={this.state.name}
            type="text"
            name="name"
            className="animated bounceInRight  input-text"
            placeholder="User Name"
          />
        </div>
        <div className="form-group form-box">
          <input
            onChange={this.changeHandler}
            value={this.state.email}
            type="email"
            name="email"
            className="animated bounceInRight input-text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group form-box">
          <input
            onChange={this.changeHandler}
            value={this.state.phone}
            type="phone"
            name="phone"
            className="animated bounceInRight input-text"
            placeholder="phone Number"
          />
        </div>
        <div className="form-group form-box">
          <input
            onChange={this.changeHandler}
            value={this.state.password}
            type="password"
            name="password"
            className="animated bounceInRight input-text"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-box image">
          <div className="image-file animated bounceInRight">
            <input
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
