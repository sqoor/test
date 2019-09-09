import React, { Component } from "react";
import { BrowserRouter as  Router, Route , Link } from "react-router-dom";

import MyProfile from '../components/profile/MyProfile';
import Register from '../components/register/Register';
import Home from '../components/home/Home'

export class Navbar extends Component {
  render() {
    return (
      <Router>

      <div>
          <nav class="navbar navbar-light bg-light">
          <Link to="/" >Home</Link>
          <Link to="/profile/:id" >My Profile</Link>
          <Link to="/register" >sign out</Link>
          </nav>

          <Route path="/" exact component={Home} />
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
