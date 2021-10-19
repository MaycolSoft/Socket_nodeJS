const io = require("socket.io-client");


const socket = io('ws://localhost:9999');

socket.on('connect', () => {
  // either with send()
  socket.send('Hello!');

  // or with emit() and custom event names
  socket.emit('salutations', 'Hello!', { 'mr': 'john' }, Uint8Array.from([1, 2, 3, 4]));
});

// handle the event sent with socket.send()
socket.on('message', data => {
  console.log(data);
});

// handle the event sent with socket.emit()
socket.on('greetings', (elem1, elem2, elem3) => {
  console.log(elem1, elem2, elem3);
});





const express = require('express')
const app = express();
const port = 2000

app.get('/', (req, res) => {
    res.send('Hello Worldf!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
