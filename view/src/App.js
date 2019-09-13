import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/home/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Register from "./components/register/Register";
import MyProfile from "./components/profile/MyProfile";
import PostPage from "./components/posts/PostPage";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    isLogged: false
  }

  userLogged = (value) => {
    this.setState({ isLogged: !this.state.isLogged })
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar isLogged={this.state.isLogged} userLogged={this.userLogged} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={MyProfile} />
            <Route path="/post/:id" component={PostPage} />
            <Route path="/register" component={() => <Register userLogged={this.userLogged} />} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
