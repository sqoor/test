import React, { Component } from "react";

export class AddComment extends Component {
  addComment = e => {
    e.preventDefault();

    const comment = this.commentInput.value;

    if (!comment) return alert("empty input field");

    this.props.addComment(comment);
    this.commentInput.value = "";
  };

  render() {
    return (
      <div  className="add_Post_form" style={{padding:"0", width: '90%', margin: 'auto'}}>
      <hr/>
          <form onSubmit={this.addComment} className="form-inline">
           
            <textarea
              placeholder="Add a comment..."
               ref={elem => (this.commentInput = elem)}
            ></textarea>
            <button className="btn btn-info">Comment</button>
          </form>
       
      </div>
    );
  }
}

export default AddComment;
