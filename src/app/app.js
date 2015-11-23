let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static('public'));
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

let connectedSockets = [];

let removeSocket = (theSocket) => {
  for(let i = 0; i < connectedSockets.length; i++) {
    let s = connectedSockets[i];
    if(s === theSocket) {
      delete connectedSockets[i];
      break;
    }
  }
};

io.on('connection', (socket) => {
  console.log('A user connected!');
  connectedSockets.push(socket);

  socket.on('disconnect', (socket) => {
    removeSocket(socket);
    console.log('User disconnected!');
  });

  socket.on('chat message', (msg) => {
    console.log(`Message received by server is ${msg}`);
    io.emit('chat message', msg)
  })
});

http.listen(3000, () => {
  console.log("listening on port 3000");
});
