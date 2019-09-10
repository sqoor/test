import React, { Component } from "react";

export class MyPostItem extends Component {
  render() {
    const { _id, image, title, text, code, deletePost } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="post_item">
                <div className="User_info">
                  <div className="user_img">
                    <img src={image} alt='profile'/>
                  </div>
                  <div className="user_name">Me</div>
                  <span className="userinfo_date">
                    <b>Date:</b> 12/12/2019
                  </span>
                  <span className="userinfo_date">
                    <b>time:</b> 12:83 PM
                  </span>
                </div>
                <div className="post">
                  <h4>{title}</h4>
                  <h6>{text}</h6>
                  <br />
                  <textarea>{code}</textarea>
                </div>
                <div className="pos_anser_single">
                  <textarea>the Answers</textarea>
                  <button className="btn btn-info">Answer</button>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={deletePost.bind(this, _id)}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </div>
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
