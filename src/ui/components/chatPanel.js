import React, {Component} from "react";

class ChatPanel extends Component {
  render() {
    return (
      <div className="chat-panel">
         {this.props.panelName}
      </div>
    )
  }
}

module.exports = ChatPanel;
