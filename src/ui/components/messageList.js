import React, {Component} from "react";
import MessageRow from "./messageRow";

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
          <MessageRow author="Daniel Valencia"
            text="Hi, how are you?" />
          <MessageRow author="Paulina Julian"
            text="Very good, thanks! How about you ?" />
          <MessageRow author="Daniel Valencia"
            text="I'm doing good too! Nice talking to you." />
      </div>
    )
  }
}

module.exports = MessageList;
