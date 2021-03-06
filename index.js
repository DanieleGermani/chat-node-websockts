const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
require('dotenv').config();

const messages = [{
  id: 1,
  text: 'Welcome!!!!  ',
  author: 'Admin'
}

];



app.use(express.static('public'));

app.get('/',(req, res)=>{
  res.status(200).send('HOLA MUNDO');
});

io.on('connection',(socket)=>{
  console.log('alguien se ha conectado con Sockets');
  socket.emit('messages',messages);

  socket.on('new-message',(data)=>{
    messages.push(data);

    io.sockets.emit('messages', messages);

  });

});

server.listen(process.env.PORT || 8080, () => {
  console.log(`el servitor esta corriendo en htttp://localhost:8080`);
});
