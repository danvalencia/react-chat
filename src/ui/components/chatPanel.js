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
    this.defaultAreaMessage = 'Enter your message here...';
    this.state = {value: this.defaultAreaMessage,
                  messages: []};
  }


  handleTextAreaChange() {
    this.setState({value: event.target.value});
  }

  handleBroadcastMessage(message) {
    console.log(`Message is ${message}`);

    // this.setState((previousState, currentProps) => {
    //   previousState.messages.push()
    // })
  }

  handleFocus() {
    const textAreaValue = this.refs.messageInput.value;
    if(textAreaValue.trim() === this.defaultAreaMessage) {
      this.setState({value: ""});
    }
  }

  handleMessageSend(webSocket) {
    const message = this.refs.messageInput.value;
    console.log(`Message to send is: ${message}`)
    webSocket.emit('chat message', message);
  }

  render() {
    const {webSocket, chatTitle} = this.props;
    const {value, messages} = this.state;

    webSocket.on('chat message', this.handleBroadcastMessage);

    return (
      <div className="chat-panel col-md-8 with-border">
        <div style={styles.chatTitle}>
          <h4>{this.props.chatTitle}</h4>
        </div>
        <MessageList value={messages}/>
        <div className="message-input" >
          <textarea ref="messageInput"
                    style={styles.textArea} name="message-input-txt-area" rows="2"
                    value={value}
                    onChange={this.handleTextAreaChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}></textarea>
          <button style={styles.button} onClick={this.handleMessageSend.bind(this, webSocket)}>Send</button>
        </div>
      </div>
    )
  }
}

module.exports = ChatPanel;
