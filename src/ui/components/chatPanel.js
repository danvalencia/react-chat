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
    this.state = {value: this.defaultAreaMessage};
  }

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleTextAreaChange() {
    let newState = {
      value: event.target.value
    };

    this.setState(newState);
  }

  handleMessageSend(store) {
    const message = this.refs.messageInput.value;
    console.log(`Message to send is: ${message}`)

    let id = new Date().getTime();
    store.dispatch({
      type: 'SEND_MESSAGE',
      text: message,
      id: id,
      author: id
    })

    this.setState({
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
    const {value, messages} = this.state;
    const { store } = this.context;
    const state = store.getState()

    return (
      <div className="chat-panel col-md-8 with-border">
        <div style={styles.chatTitle}>
          <h4 onClick={() => {alert('click!')}}>{this.props.chatTitle}</h4>
        </div>
        <MessageList messages={state}/>
        <div className="message-input" >
          <textarea ref="messageInput"
                    style={styles.textArea} name="message-input-txt-area" rows="2"
                    value={value}
                    onChange={this.handleTextAreaChange.bind(this)}
                    placeholder="Type to chat...">
          </textarea>
          <button style={styles.button} onClick={this.handleMessageSend.bind(this, store)}>Send</button>
        </div>
      </div>
    )
  }
}

ChatPanel.contextTypes = {
  store: React.PropTypes.object
}

module.exports = ChatPanel;
