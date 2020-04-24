var socket = io();

socket.on('connect', function()  {

    console.log('Servidor conectado');
})

socket.on('disconnect', function () {

    console.log('Servidor desconectado')
})

//Los emit se usan para enviar y los on para recibir mensajes.
socket.emit('enviarMensaje', {
        usuario: 'jose',
        mensaje: 'Enviando mensaje por socket desde el cliente'},
    function(res) {
        console.log('Mensaje desde el servidor: ', res);
    })

// Recibimos un mensaje del evento enviarMensaje desde el servidor
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
})
