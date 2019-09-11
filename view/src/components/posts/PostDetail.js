import React, { Component } from "react";
import Axios from "axios";
import Comment from "./Comment";

export class PostDetail extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    Axios.get("/comments")
      .then(res => {
        console.log("TEST comments from api", res.data);
        this.setState({ comments: res.data });
      })
      .catch(err => console.log(err));
  }

  addComment(e) {
    e.preventDefault();

    const { _id, code, text, title, user, userId } = this.props.location.state;

    const newComment = {
        // postId: _id,
        // userId: logged._id,
        // text: this.commentInput,
        // user: {
        //   name: loggedUser.name,
        //   image: loggedUser.image
        // }
    };

    // Axios.post("/comments", newComment)
    //   .then(res => {
    //     console.log("TEST comments from api", res.data);
    //     this.setState({ comments: [...this.state.comments, res.data] });
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    const { code, text, title, user, userId } = this.props.location.state;
    return (
      <div className="post_item">
        <div className="User_info">
          <div className="user_img">
            <img src={""} alt={`${user.name} photo`} />
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
          <p className="text">{text}</p>
          <p className="code">{code}</p>
        </div>
        <div className="comments">
          {this.state.comments.map(comment => (
            <Comment comment={comment} />
          ))}
        </div>

        <div className="add-comment">
          <form onSubmit={this.addComment} className="form-inline">
            <input ref={elem => (this.commentInput = elem)} type="text" />
            <button>Comment</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostDetail;
