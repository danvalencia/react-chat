import React, {Component} from "react";
import MessageRow from "./messageRow";

const MessageList = ({messages}) => {
  let messageRows = messages.map((m) => {
    return <MessageRow key={m.id} author={m.id}
      text={m.text} />
  });

  return (
    <div className="message-list">
      {messageRows}
    </div>
  )
}

module.exports = MessageList;
