import React, {Component} from "react";

const styles = {
  layout: {
    borderStyle: 'dashed',
    borderWidth: 'thin'
  },

  authorLayout: {
    float: 'left',
    fontStyle: 'italic'
  },

  textLayout: {
    textAlign: 'right'
  }
};

class MessageRow extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.authorLayout}>
          {this.props.author}
        </div>
        <div style={styles.textLayout}>
          {this.props.text}
        </div>
      </div>
    )
  }
}

module.exports = MessageRow;
