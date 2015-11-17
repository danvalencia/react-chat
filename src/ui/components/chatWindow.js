let React = require('react');
let ChatPanel = require('./chatPanel')

let ChatWindow = React.createClass({
  render: function() {
    return <div className="chat-window">
            <h1>Hello, Chat Window!</h1>
            <ChatPanel panelName="Hello World Panel"/>
           </div>
  }
});

module.exports = ChatWindow;
