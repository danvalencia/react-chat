import React, {Component} from "react";
import ChatPanel from "./chatPanel"
import UserPanel from "./userPanel"

class ChatWindow extends Component {
  render() {
    return (
      <div className="chat-window row">
        <ChatPanel chatTitle="My Chat" />
        <UserPanel userPanelTitle="Users"/>
      </div>
    )
  }
}

module.exports = ChatWindow;
