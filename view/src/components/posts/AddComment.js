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
      <div  class="add_Post_form" style={{padding:"0"}}>
      <hr/>
          <form onSubmit={this.addComment} className="form-inline">
           
            <textarea
               ref={elem => (this.commentInput = elem)}
            ></textarea>
            <button class="btn btn-info">answer</button>
          </form>
       
      </div>
    );
  }
}

export default AddComment;
