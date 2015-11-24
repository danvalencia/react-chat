import React, {Component} from 'react';
import MessageList from './messageList';

const styles = {
  textArea: {
    width: "90%"
  },

  button: {
    width: "10%"
  },

  chatTitle: {
    textAlign: "left"
  }
}

class ChatPanel extends Component {

  constructor(props) {
    super(props);
    this.defaultAreaMessage = '';
    this.state = {value: this.defaultAreaMessage,
                  messages: []};
  }

  handleTextAreaChange() {
    let newState = {
      ...this.state,
      value: event.target.value
    };

    this.setState(newState);
  }

  handleBroadcastMessage(message) {
    console.log(`Message is ${message}`);

    let newMessageState = [
      ...this.state.messages,
      message
    ];

    this.setState({
      ...this.state,
      messages: newMessageState
    });
  }


  handleMessageSend(webSocket) {
    const message = this.refs.messageInput.value;
    console.log(`Message to send is: ${message}`)
    webSocket.emit('NEW_MESSAGE', this.buildMessage(message));

    this.setState({
      ...this.state,
      value: this.defaultAreaMessage
    });
  }

  buildMessage(message) {
    let id = new Date().getTime();
    return {
      text: message,
      id: id
    }
  }

  render() {
    const {webSocket, chatTitle} = this.props;
    const {value, messages} = this.state;

    webSocket.on('NEW_MESSAGE', this.handleBroadcastMessage.bind(this));

    return (
      <div className="chat-panel col-md-8 with-border">
        <div style={styles.chatTitle}>
          <h4 onClick={() => {alert('click!')}}>{this.props.chatTitle}</h4>
        </div>
        <MessageList messages={messages}/>
        <div className="message-input" >
          <textarea ref="messageInput"
                    style={styles.textArea} name="message-input-txt-area" rows="2"
                    value={value}
                    onChange={this.handleTextAreaChange.bind(this)}
                    placeholder="Type to chat...">
          </textarea>
          <button style={styles.button} onClick={this.handleMessageSend.bind(this, webSocket)}>Send</button>
        </div>
      </div>
    )
  }
}

module.exports = ChatPanel;
