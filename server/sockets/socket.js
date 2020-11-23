const { io } = require('../server');
io.on('connection', (client) => {
    console.log('conectado');

    client.emit('enviarMensaje', { err: false, usuario: 'Admin', mensaje: ' Bienvenido a la APP' });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', {
                ok: true,
                mensaje: 'Hola se conecto  ' + data.usuario
            })
            /* if (data.usuario) {
                callback({
                    ok: true,
                    mensaje: 'mensaje recibido'
                });

            } else {
                callback({
                    ok: false,
                    mensaje: 'mensaje no recibido'
                });
            } 
            */
    });
})