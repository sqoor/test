import React, { Component } from "react";
// import mongoose from 'mongoose';

export class MyPostItem extends Component {
  render() {
    const { _id, image, title, text, code, deletePost } = this.props;

    // const isoDate = mongoose.Types.ObjectId(_id).getTimestamp()
    // const date = new Date(isoDate);
    // console.log (date)

    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();

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
                  <div className="user_name">Me</div>
                  <span className="userinfo_date">
                    <b>Date:</b> {`${day}/${month}/${year}`}
                  </span>
                  <span className="userinfo_date">
                    <b>time:</b> {`${hour}:${minutes}`}
                  </span>
                  <span>
                    <button
                      type="button"
                      className="btn btn-outline-danger rounded-circle"
                      onClick={deletePost.bind(this, _id)}
                    >
                      Delete
                    </button>
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
                  <button className="btn btn-info">Answer</button>
                </div>
                <div></div>
                <div className="commints">
                  <div className="commints_answers">10 Comments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPostItem;
