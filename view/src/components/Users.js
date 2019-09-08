import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';

const User = ({match}) => <strong>{match.params.id}</strong>

export default class Users extends Component {
    render() {
        console.log(this.props);
        return (
          <div>
            <h1>Users</h1>
            <strong>select a user</strong>
            <ul>
              <li>
                <Link to="/users/1">User 1 </Link>
              </li>
              <li>
                <Link to="/users/2">User 2 </Link>
              </li>
              <li>
                <Link to="/users/3">User 3 </Link>
              </li>
            </ul>
            <Route path="/users/:id" component={User} />
          </div>
        )
      }
}
