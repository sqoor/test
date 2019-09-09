import React, { Component } from "react";

export class MyPostItem extends Component {
  render() {
    const { myPost, myInfo } = this.props;

    return (
      <div>
        <div className="container"></div>
        <div className="row"></div>
        <div className="col-md-10"></div>
        {myPost.map(item => {
          return (
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <div className="post_item">
                    <div className="User_info">
                      <div className="user_img">
                        <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiBnMXG6cPkAhUWDGMBHelPD2gQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.timelinecoverbanner.com%2Fcircular-profile-picture%2F&psig=AOvVaw1gI36CGOzOspDnVg04OmHp&ust=1568121328027888" />
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
                      <h5>{item.title}</h5>
                      <br />
                      <textarea>{item.code}</textarea>
                    </div>
                    <div className="pos_anser_single">
                      <textarea>the Answers</textarea>
                      <button className="btn btn-info">Answer</button>
                    </div>
                    <div className="commints">
                      <div className="commints_answers">10 Comments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MyPostItem;
