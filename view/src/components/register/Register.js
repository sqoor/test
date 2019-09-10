import React, { Component } from "react";
import Login from "./Login";

export class Register extends Component {
  loginBtn = () => { 
    document.getElementById("login").style.display = "block";
    document.getElementById("signup").style.display = "none";

  };
  signupBtn = () => { 
    document.getElementById("login").style.display = "none"
    document.getElementById("signup").style.display = "block"
  };
  render() {
    return (
      <div class="login-10">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-12 col-pad-0 bg-color-10">
              <div class="form-section ">
                <div class="logo">
                  <h3>Welcome To Code Talkerz</h3>
                </div>
                <div class="btn-section">
                  <a href="#" class="link-btn active" onClick={this.loginBtn}>
                    Login
                  </a>
                  <a href="#" class="link-btn" onClick={this.signupBtn}>
                  signup
                  </a>
                </div>
                <div class="login-inner-form" id="login">
                  <form action="" method="GET">
                    <div class="form-group form-box">
                      <input
                        type="email"
                        name="email"
                        className="animated bounceInLeft input-text"
                        placeholder="Email Address"
                      />
                    </div>
                    <div class="form-group form-box">
                      <input
                        type="password"
                        name="Password"
                        className="animated bounceInLeft  input-text"
                        placeholder="Password"
                      />
                     
                    </div>
                    <div class="checkbox clearfix">
                    
                    </div>
                    <div class="form-group mb-0">
                      <button type="submit" class="btn-md btn-theme btn-block">
                        Login
                      </button>
                    </div>
                  </form>
                  <div class="extra-login">
                    <span>Code Talkerz</span>
                  </div>
                </div>
                <div class="login-inner-form " style={{display:"none"}} id="signup">
                  <form action="" method="GET">
                  <div class="form-group form-box">
                      <input
                        type="text"
                        name="userName"
                        className="animated bounceInLeft  input-text"
                        placeholder="User Name"
                      />
                      
                    </div>


                    <div class="form-group form-box">
                      <input
                        type="email"
                        name="email"
                        className="animated bounceInLeft input-text"
                        placeholder="Email Address"
                      />
                      
                    </div>
                    <div class="form-group form-box">
                      <input
                        type="phone"
                        name="numper"
                        className="animated bounceInLeft  input-text"
                        placeholder="phone Numper"
                      />
                      
                    </div>
                    <div class="form-group form-box">
                      <input
                        type="password"
                        name="Password"
                        className="animated bounceInLeft  input-text"
                        placeholder="Password"
                      />
                      
                    </div>
                    <div class="form-group form-box">
                      <input
                        type="text"
                        name="imgUrl"
                        className="animated bounceInLeft  input-text"
                        placeholder="Enter Img URL"
                      />
                      
                    </div>
                    
                    <div class="checkbox clearfix">
                   
                    </div>
                    <div class="form-group mb-0">
                      <button type="submit" class="btn-md btn-theme btn-block">
                        sign Up
                      </button>
                    </div>
                  </form>
                  <div class="extra-login">
                  <span>Code Talkerz</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-lg-7 col-md-12 col-pad-0 bg-img none-992">
              <div class="info">
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

export default Register;
