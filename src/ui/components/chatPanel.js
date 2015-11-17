let React = require('react');


var ChatPanel = React.createClass({
  render: function() {
      return <div className="chat-panel">
               {this.props.panelName}
             </div>
    }
});

module.exports = ChatPanel;
