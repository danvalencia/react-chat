import React, {Component} from "react";
import MessageList from "./messageList"

const styles = {
  textArea: {
    width: "100%"
  }
}

class ChatPanel extends Component {
  render() {
    return (
      <div className="chat-panel col-md-8 with-border">
        <div className="chat-title">
          <h4>{this.props.chatTitle}</h4>
        </div>
        <MessageList />
        <div className="message-input" >
          <textarea style={styles.textArea} name="message-input-txt-area" rows="4"></textarea>
        </div>
      </div>
    )
  }
}

module.exports = ChatPanel;
