let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static('public'));
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

io.on('connection', (socket) => {
  console.log('A user connected!');

  socket.on('disconnect', (socket) => {
    console.log('User disconnected!');
  });

  socket.on('NEW_MESSAGE', (msg) => {
    console.log(`Message received by server is ${msg.text}`);
    io.emit('NEW_MESSAGE', msg)
  })
});

http.listen(3000, () => {
  console.log("listening on port 3000");
});
