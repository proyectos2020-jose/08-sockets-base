const express = require('express');

const path = require('path');

const http = require('http');
const app = express();

//Vamos a crear un servidor con http para poder trabajar con sockets
//le pasamos el servidor de express al servidor con http de node para
// que to do lo que pongamos en express funcione en el otro servidor http.
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

//Paquete para usar sockets en node
const socketIO = require('socket.io');

app.use(express.static(publicPath));

// Se define el socket de esta forma para mantener una comunicación con el servidor.
// Se exporta para poder llamar a io desde otros ficheros js
module.exports.io = socketIO(server);

//Se require el fichero socket para que se lance el codigo que contiene al levantar el servidor.
require('./socket/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
