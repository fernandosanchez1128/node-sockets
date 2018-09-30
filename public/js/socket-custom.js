var socket = io();
//cuando el cliente se conecta
socket.on('connect', function() {
        console.log('Conectado al servidor')
    })
    //cuando el cleinte se desconecta
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor')
})

//Los emits son para enviar informacion
socket.emit('EnviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo',
}, function(respuesta) {
    console.log('respuesta server', respuesta)
})

socket.on('EnviarMensaje', function(msg) {
    console.log('servidor', msg)
})