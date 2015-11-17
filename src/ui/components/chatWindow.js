import React, {Component} from "react";
import ChatPanel from "./chatPanel"

class ChatWindow extends Component {
  render() {
    return (
      <div className="chat-window">
        <h1>Hello, Chat Window!</h1>
        <ChatPanel panelName="Hello World Panel"/>
      </div>
    )
  }
}

module.exports = ChatWindow;
