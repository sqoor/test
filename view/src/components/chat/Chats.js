import React, { Component } from "react";
import Search from "./Search";
import ChatNode from "./ChatNode";

export class Chats extends Component {
  state = {
    conversations: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
  };

  componentDidMount() {
    // api request to get chats for this user
  }

  render() {
    return (
      <div className="container m-2 p-5 text-center border">
        <Search />
        <div className="mt-5">
          <h2 className="text-warning m-4">Conversations</h2>
          <div className="d-flex flex-wrap">
            {this.state.conversations.map((chat, i) => {
              return <ChatNode key={i} chat={chat} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Chats;
