import ChatWindow from './components/chatWindow'
import ReactDOM from 'react-dom'
import React from 'react'
import io from 'socket.io-client'
import jQuery from 'jquery'

let socket = io();

ReactDOM.render(
  <ChatWindow webSocket={socket}/>,
  document.getElementById('main'));
