
 
const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
 





app.get('/', (req, res) => {
    

    res.send('Hello Worldf!')
})
 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});



const io = require('socket.io')(port+1);

io.on('connection', socket => {
  // either with send()
  socket.send('Hello!');

  

  // handle the event sent with socket.send()
  socket.on('say_hello', (data) => {
    // or with emit() and custom event names
    socket.emit('greetings', 'Hey!', { 'ms': 'jane' }, Buffer.from([4, 3, 3, 1]));
  });

  // handle the event sent with socket.emit()
  socket.on('salutations', (elem1, elem2, elem3) => {
    console.log(elem1, elem2, elem3);
  });

});
