import React, { Component } from "react";

export class Search extends Component {
  submitHandler(e) {
    e.preventDefault();

    const searchInput = e.target.children[0];
    // api request to search for users

    searchInput.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} className="form-inline">
          <input
            className="form-control"
            type="text"
            placeholder="Search for a user..."
          />
          <button className="btn btn-outline-info">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
