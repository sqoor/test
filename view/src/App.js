import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import AdminPage from "./components/admin/AdminPage";
import { AdminLogin } from "./components/admin/AdminLogin";
import LogIn from "./components/register/Login";
import SignUp from "./components/register/SignUp";

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Router>
         <Nav />
          <hr />
          <Switch>
            <Route path="/" exact component={() => <Home {...this.props} />} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route path="/admin" exact component={AdminPage} />
            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
