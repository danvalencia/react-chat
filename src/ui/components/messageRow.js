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


const MessageRow = ({author, text}) => {
  return (
    <div style={styles.layout}>
      <div style={styles.authorLayout}>
        {author}
      </div>
      <div style={styles.textLayout}>
        {text}
      </div>
    </div>
  )
}

module.exports = MessageRow;
