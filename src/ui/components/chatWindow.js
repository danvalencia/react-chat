import React, {Component} from "react";
import ChatPanel from "./chatPanel"
import UserPanel from "./userPanel"

class ChatWindow extends Component {
  render() {
    return (
      <div className="chat-window row">
        <ChatPanel webSocket={this.props.webSocket} chatTitle="My Chat" />
        <UserPanel webSocket={this.props.webSocket} userPanelTitle="Users"/>
      </div>
    )
  }
}

module.exports = ChatWindow;
