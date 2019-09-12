import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/home/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Register from "./components/register/Register";
import MyProfile from "./components/profile/MyProfile";
// import PostsPage from "./components/posts/PostPage";
import NavBar from "./components/NavBar";
import PostDetail from "./components/posts/PostDetail";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={MyProfile} />
            <Route path="/post/:id" component={PostDetail} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
