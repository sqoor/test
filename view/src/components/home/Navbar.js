import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MyProfile from '../profile/MyProfile';
import Register from '../register/Register';
// import Home from '../home/Home'

export class Navbar extends Component {
  render() {
    return (
      <Router>

      <div>
          <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand mb-0 h1" href='/' >Home</a>
          <a class="navbar-brand mb-0 h1" href='/profile/:id' >My Profile</a>
          <a class="navbar-brand mb-0 h1" href='/register' >sign out</a>
          </nav>

          {/* <Route path="/" exact component={Home} /> */}
            <Route path="/profile/:id" component={MyProfile} />
            {/* <Route path="/post/:id" component={PostsPage} /> */}
            <Route path="/register" component={Register} />
            {/* <Route path="/contact" component={Contact} /> */}
            {/* <Route component={NotFound} /> */}
      </div>

      </Router>

    );
  }
}

export default Navbar;
