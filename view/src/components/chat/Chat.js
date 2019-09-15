import React, { Component } from 'react'

export class Chat extends Component {
    submitHandler(e) {
        e.preventDefault();

        const messageInput = e.target.children[0];
        if (!messageInput.value) return;
        console.log(messageInput.value);
    }

    render() {
        return (
            <div className="container p-5 text-center border">
                <div className="message">
                </div>
                <form
                    style={{position: "absolute", bottom: "20%"}} 
                    onSubmit={this.submitHandler}
                    className="form-inline footer">
                    <input className="form-control" type="text" />
                    <button className="btn btn-outline-primary">Send</button>
                </form>
            </div>
        )
    }
}

export default Chat
