import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ChatNode extends Component {
  render() {
      const id = '1';
    return (
      <Link className="text-muted" to={{ pathname: `/chat/${id}`, state: {} }}>
        <div
          className="rounded-circle border bg-dark"
          style={{ width: "150px", height: "150px", margin: "10px" }}
        >
          ChatNode Component
          <p>Name of chat receiver</p>
        </div>
      </Link>
    );
  }
}

export default ChatNode;
