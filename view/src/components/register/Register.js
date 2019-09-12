import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import Axios from "axios";

export class Register extends Component {

  authGurd() {
    let loggedUser = localStorage.user;
    if(loggedUser)
      loggedUser = JSON.parse(loggedUser);
    if(loggedUser) this.props.history.push('/');
  }

  componentDidMount() {
   this.authGurd();
  }

  loginBtn = () => {
    document.getElementById("login").style.display = "block";
    document.getElementById("signup").style.display = "none";
  };

  signupBtn = () => {
    document.getElementById("login").style.display = "none"
    document.getElementById("signup").style.display = "block"
  };

  loginHandler = (e) => {
    e.preventDefault()

    const email = this.loginEmail.value
    const password = this.loginPass.value

    Axios
      .post('/login', { email, password })
      .then(res => {
        this.existCases(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  existCases = (userCase) => {
    if (userCase === 'user not existed')
      alert('user not existed');
    else if (userCase === 'email or password do not match')
      alert('email or password do not match');

    else if (Array.isArray(userCase) && userCase.length) {
      // set localstorage  // DONE 
      // redirect to home page
      // check the browser
      // set localstorage as object // JSON.stringify
      // get localstorage as object // JSON.parse
      // JSON.parse(localStorage.user)

      const user = userCase[0];
      localStorage.setItem('user', JSON.stringify(user));


      this.props.userLogged(true);

      this.props.history.push({
        pathname: '/',
        state: user
      });
    }

  }

  signupHandler = (e) => {
    e.preventDefault()

    const newUser = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      password: this.password.value,
      image: this.image.value
    }

    if (!(newUser.email && newUser.phone && newUser.password))
      return alert('empty fields');

    Axios.post('/signup', newUser)
      .then(res => {
        this.signUpCases(res.data);
      })
      .catch(err => console.log(err))
  }

  signUpCases(userCase) {
    if (userCase === 'this email already have an account')
      return alert('this email already have an account');

    else if (typeof userCase === "object") {
      const user = userCase
      localStorage.setItem('user', JSON.stringify(user));

      this.props.userLogged(true);

      this.props.history.push({
        pathname: '/',
        state: user
      });
    }
  }

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
                  <form onSubmit={this.loginHandler} action="" method="GET">
                    <div className="form-group form-box">
                      <input
                        ref={elem => this.loginEmail = elem}
                        type="email"
                        name="email"
                        className="animated bounceInLeft input-text"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group form-box">
                      <input
                        ref={elem => this.loginPass = elem}
                        type="password"
                        name="Password"
                        className="animated bounceInLeft  input-text"
                        placeholder="Password"
                      />

                    </div>
                    <div className="checkbox clearfix">

                    </div>
                    <div className="form-group mb-0">
                      <button type="submit" className="btn-md btn-theme btn-block">
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="extra-login">
                    <span>Code Talkerz</span>
                  </div>
                </div>
                <div className="login-inner-form " style={{ display: "none" }} id="signup">
                  <form onSubmit={this.signupHandler} action="" method="GET">
                    <div className="form-group form-box">
                      <input
                        ref={elem => this.name = elem}
                        type="text"
                        name="name"
                        className="animated bounceInLeft  input-text"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="form-group form-box">
                      <input
                        ref={elem => this.email = elem}
                        type="email"
                        name="email"
                        className="animated bounceInLeft input-text"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group form-box">
                      <input
                        ref={elem => this.phone = elem}
                        type="phone"
                        name="numper"
                        className="animated bounceInLeft  input-text"
                        placeholder="phone Numper"
                      />
                    </div>
                    <div className="form-group form-box">
                      <input
                        ref={elem => this.password = elem}
                        type="password"
                        name="Password"
                        className="animated bounceInLeft  input-text"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group form-box">
                      <input
                        ref={elem => this.image = elem}
                        type="text"
                        name="imgUrl"
                        className="animated bounceInLeft  input-text"
                        placeholder="Enter Img URL"
                      />
                    </div>
                    <div className="checkbox clearfix">
                    </div>
                    <div className="form-group mb-0">
                      <button type="submit" className="btn-md btn-theme btn-block">
                        sign Up
                      </button>
                    </div>
                  </form>
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
