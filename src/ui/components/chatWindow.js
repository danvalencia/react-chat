import React, {Component} from "react";
import ChatPanel from "./chatPanel"
import UserPanel from "./userPanel"

const ChatWindow = () => {
  return (
    <div className="chat-window row">
      <ChatPanel chatTitle="My Chat" />
      <UserPanel userPanelTitle="Users"/>
    </div>
  )
}

module.exports = ChatWindow;
