
 
const express = require('express')
const app = express();
const port = 2001
 


const io = require('socket.io')(3000);

io.on('connection', socket => {
  // either with send()
  socket.send('Hello!');

  // or with emit() and custom event names
  socket.emit('greetings', 'Hey!', { 'ms': 'jane' }, Buffer.from([4, 3, 3, 1]));

  // handle the event sent with socket.send()
  socket.on('message', (data) => {
    console.log(data);
  });

  // handle the event sent with socket.emit()
  socket.on('salutations', (elem1, elem2, elem3) => {
    console.log(elem1, elem2, elem3);
  });
});



app.get('/', (req, res) => {
    

    res.send('Hello Worldf!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
