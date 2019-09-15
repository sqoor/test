import React, { Component } from "react";
import mongoose from "mongoose";
import moment from "moment";
import { Link } from "react-router-dom";

export class MyPostItem extends Component {
  creationTime() {
    const { _id } = this.props;
    const isoDate = mongoose.Types.ObjectId(_id).getTimestamp();
    const mom = new moment(isoDate);
    const now = new moment();
    const duration = moment.duration(now.diff(mom));

    return duration.humanize();
  }

  render() {
    const { deletePost } = this.props;
    const { _id, title, text, code, user } = this.props.post;

    return (
      <div className="col-md-10 offset-md-1">
        <div className="post_item wow slideInLeft">
          <div className="User_info">
            <div className="user_img">
              <img src={user.image} alt="ahmad" />
            </div>
            <div className="user_name">{user.name}</div>
            <span className="userinfo_date float-right">
              {this.creationTime() + " ago"}
            </span>
          </div>
          <div className="post">
            <div className="post">
              <h4>{title}</h4>
              <h6>{text}</h6>
              <br />
              <pre>{code}</pre>
            </div>
          </div>
          <div className="pos_anser_single">
            {/* <p>the Answers</p> */}
            <button
              type="button"
              className="btn btn-danger float-left"
              onClick={deletePost.bind(this, _id)}
            >
              Delete Post
            </button>
            <Link
              className="text-light"
              to={{ pathname: `/post/${_id}`, state: this.props.post }}
            >
              <button className="btn btn-info">Check The Answers</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPostItem;
