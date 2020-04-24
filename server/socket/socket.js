const {io} = require('../server');

io.on('connection', (client)=> {

    console.log('Usuario conectado')

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    })

    // Recibimos un mensaje desde el cliente al servidor
    client.on('enviarMensaje', (mensaje, callback)=> {
        console.log(mensaje);
        if(mensaje.usuario) {
            callback({mensaje: 'Todo salió bien'})
        } else {
            callback({mensaje: 'Todo salió MAL!'})
        }

        client.broadcast.emit('enviarMensaje', mensaje);
    })

    // Enviamos un mensaje desde el servidor al cliente
    client.emit('enviarMensaje', {usuario: 'Administrador', mensaje: 'Mensaje desde el servidor'})
})
