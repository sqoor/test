import React, { Component } from "react";

export default class Contact extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    
    if(this.name.value.length > 0 && this.email.value.length > 0)
      this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Contact Component</h1>
        <form onSubmit={this.submitHandler}>
          <input ref={elem => this.name = elem} type="text" placeholder="Name" />
          <input ref={elem => this.email = elem} type="email" placeholder="Email" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
