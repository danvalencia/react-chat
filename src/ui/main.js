import ChatWindow from './components/chatWindow'
import ReactDOM from 'react-dom'
import React from 'react'
import io from 'socket.io-client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let socket = io();

socket.on('NEW_MESSAGE', (msg) => {
  handleBroadcastMessage(msg);
});


const chatReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      console.log(`Inside NEW_MESSAGE case in the reducer`);
      const filteredState = state.filter(m => { m.id === action.id });
      if(filteredState.length == 0) {
        console.log(`This is a new message, adding it to the state`);
        return [
          ...state,
          {
            id: action.id,
            author: action.author,
            text: action.text,
            isSending: false
          }
        ]
      } else {
        return state;
      }
    case 'SEND_MESSAGE':
      const newMessage = {
        id: action.id,
        author: action.author,
        text: action.text,
        isSending: true
      };
      socket.emit('NEW_MESSAGE', newMessage);
      return state;
    default:
      return state;
  }
}

let store = createStore(chatReducer);

const handleBroadcastMessage = (message) => {
  console.log(`Message is ${message}`);
  console.log(`Receiving broadcasted message`);
  store.dispatch({
    type: 'NEW_MESSAGE',
    text: message.text,
    id: message.id,
    author: message.id
  });
  console.log(`After dispatching new message`);
}

ReactDOM.render(
  <Provider store={store}>
    <ChatWindow />
  </Provider>,
  document.getElementById('main'));
