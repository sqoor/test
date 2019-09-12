import React, { Component } from "react";
import { Link } from "react-router-dom";

// there is a bug toggle logout/ register and hide profile if user loggedin or not

export class NavBar extends Component {
  state = {
    userLoggedIn: false
  };

  scrollWin = () => window.scrollTo(0, 0);


  componentDidMount() {
    this.setState({
      userLoggedIn: this.props.userLoggedIn
    })
  }

  logOut = () => {
    this.setState({ userLoggedIn: false });
    localStorage.clear();
  }

  render() {
    setTimeout(() => {
      document.getElementById("loder").style.display = "none";
    }, 2000);

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="loder" id="loder" onClick={this.hidenloder}>
          <img src="https://i.ibb.co/MRG7k3n/coders.png" />
        </div>
        <Link className="navbar-brand nav_logo" to="/">
          <img
            src="https://i.ibb.co/MRG7k3n/coders.png"
            className="hvr-grow"
            width="150"
          />
        </Link>
        <div className="scrool_up">
          <img
            onClick={this.scrollWin}
            src="http://www.kreeti.com/images/scroll_top.png"
            width="60"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              {/* {this.state.userLoggedIn ? ( */}
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              {/*  ) : null} */}
            </li>
            <li className="nav-item">
              {/* {this.state.userLoggedIn ? ( */}
                <Link className="nav-link" to="/" onClick={this.logOut}>
                  Logout
                </Link>
              {/* ) : ( */}
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              {/* )} */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
