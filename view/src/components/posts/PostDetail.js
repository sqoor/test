import React, { Component } from "react";
import Axios from "axios";
import moment from 'moment';
import mongoose from 'mongoose';
import Comment from "./Comment";

export class PostDetail extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };

    this.addComment = this.addComment.bind(this);
  }

  creationTime() {
    const { _id } = this.props.location.state;
    const isoDate = mongoose.Types.ObjectId(_id).getTimestamp();
    const mom = new moment(isoDate);
    const now = new moment();
    const duration = moment.duration(now.diff(mom));

    return duration.humanize();
  }

  componentDidMount() {
    const { _id } = this.props.location.state;
    Axios.get(`/comments/${_id}`)
      .then(res => {
        this.setState({ comments: res.data });
      })
      .catch(err => console.log(err));
  }

  addComment(e) {
    e.preventDefault();

    if(!this.commentInput.value) return 'empty input field';

    const { _id } = this.props.location.state;
    const loggedUser = JSON.parse(localStorage.user);

    const newComment = {
      postId: _id,
      userId: loggedUser._id,
      text: this.commentInput.value,
      user: {
        name: loggedUser.name,
        image: loggedUser.image
      }
    };

    Axios.post("/comments", newComment)
      .then(res => {
        this.setState({ comments: [...this.state.comments, res.data] });
      })
      .catch(err => console.log(err));

    this.commentInput.value = "";
  }

  render() {
    const { code, text, title, user } = this.props.location.state;
    return (
      <div>
      <div className="post_item">
        <div className="User_info">
          <div className="user_img">
            <img src={user.image ? user.image : ''} alt={`${user.name}`} />
          </div>
          <div className="user_name">{user.name}</div>
          <span className="userinfo_date float-right">
          {this.creationTime()}
          </span>
        </div>
        <div className="post">
          <h4>{title}</h4>
          <p className="text">{text}</p>
          <pre className="code bg-dark p-3 text-light">{code}</pre>
        </div>
        <div className="add-comment">
          <form onSubmit={this.addComment} className="form-inline">
            <input className="form-control" ref={elem => (this.commentInput = elem)} type="text" />
            <button className="btn btn-outline-dark">Comment</button>
          </form>
        </div>

        
      </div>
      <div className="comments">
      {this.state.comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
      </div>
    );
  }
}

export default PostDetail;
