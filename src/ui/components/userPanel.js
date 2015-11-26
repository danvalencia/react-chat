import React, {Component} from "react";

const styles = {
  textArea: {
    width: '100%'
  },

  title: {
    textAlign: "right"
  }
}

const UserPanel = ({userPanelTitle}) => {
  return (
    <div className="user-panel col-md-4 with-border">
      <div className="user-panel-title" style={styles.title}>
        <h4>{userPanelTitle}</h4>
      </div>
      <ul>
        <li>
          <div className="user-cell">
            <div className="user-img">
            </div>
            <div className="user-name">
              Daniel Valencia
            </div>
          </div>
        </li>
        <li>
          <div className="user-cell">
            <div className="user-img">
            </div>
            <div className="user-name">
              Paulina Julian
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

module.exports = UserPanel;
