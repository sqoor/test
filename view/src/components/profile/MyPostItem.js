import React, { Component } from "react";
import mongoose from 'mongoose';
import moment from 'moment';

export class MyPostItem extends Component {

  creationTime() {
    const { _id } = this.props;
    const isoDate = mongoose.Types.ObjectId(_id).getTimestamp()
    const mom = new moment(isoDate)
    const now = new moment();
    const duration = moment.duration(now.diff(mom));

    return duration.humanize();
  }

  render() {
    const { _id, image, title, text, code, deletePost, user } = this.props;
    
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="post_item">
                <div className="User_info">
                  <div className="user_img">
                    <img src={image} alt="profile" />
                  </div>
                  <div className="user_name">{user.name}</div>
                  <span className="userinfo_date float-right">
                    {this.creationTime()}
                  </span>
                </div>
                <div className="post">
                  <h4>{title}</h4>
                  <h6>{text}</h6>
                  <br />
                  <pre>{code}</pre>
                </div>
                <div className="pos_anser_single">
                  <p>the Answers</p>
                  <button className="btn btn-info">Answers</button>
                </div>
                <div></div>
                <div className="commints">
                  <div className="commints_answers">10 Comments</div>
                </div>
                <button
                      type="button"
                      className="btn btn-outline-danger rounded-circle"
                      onClick={deletePost.bind(this, _id)}
                    >
                      Delete
                    </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPostItem;
