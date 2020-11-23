var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Desconectado del server');
})

// enviar info
socket.emit('enviarMensaje', {
    err: false,
    usuario: 'Rafa',
    mensaje: 'Hola mundo'
}, function(data) {
    console.log(data);
});

// escuchar info
socket.on('enviarMensaje', function(data) {
    console.log(data);
});