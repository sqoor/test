import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Axios from 'axios';

export class Post extends Component {
  render() {
    const {
      _id,
      title,
      code,
      text,
      user
    } = this.props.post;
    return (
      <div>
        <div className="post_item wow slideInLeft">
          <div className="User_info">
            <div className="user_img">
              {/* <img src="./images/user.png" alt="" /> */}
            </div>
            <div className="user_name">{user.name}</div>
            <span className="userinfo_date">
              <b>Date:</b> 12/12/2019
            </span>
            <span className="userinfo_date">
              <b>time:</b> 12:83 PM
            </span>
          </div>
          <div className="post">
            <h4>{title}</h4>
            <p>
              <strong>{text}</strong>
            </p>
            <textarea disabled={true} value={code}></textarea>
          </div>
          <div className="pos_anser">
            <div className="anser_count"> 30 Comment </div>
            <Link className="text-light" to={{pathname: `post/${_id}`, state: this.props.post}}>
            <button className="btn btn-info">
              Answer
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
