import React, { Component } from "react";

export class AddComment extends Component {
    addComment = (e) => {
        e.preventDefault();
        
        const comment = this.commentInput.value
    
        if(!comment) return alert('empty input field');

        this.props.addComment(comment)
        this.commentInput.value = "";
    }

  render() {
    return (
        <form onSubmit={this.addComment} className="form-inline">
          <input
            className="form-control"
            ref={elem => (this.commentInput = elem)}
            type="text"
          />
          <button className="btn btn-outline-dark">Comment</button>
        </form>
    );
  }
}

export default AddComment;
