let express = require('express');
let app = express();

app.use(express.static('public'));
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

var server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
