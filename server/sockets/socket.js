const { io } = require('../server')
io.on('connection', (client) => {
    console.log('Usuario Conectado')

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    client.on('EnviarMensaje', (data, callback) => {

        console.log(data)
        client.broadcast.emit('EnviarMensaje', data)
            // console.log(mensaje)
            // if (mensaje.usuario) {
            //     callback({
            //         ok: true,
            //         respuesta: 'Todo salio bien'
            //     })
            // } else {
            //     callback({
            //         ok: false,
            //         respuesta: 'Todo salio mal'
            //     })
            // }

    })

    client.emit('EnviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

})