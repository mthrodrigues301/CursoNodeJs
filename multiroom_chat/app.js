/* import configuration server */
var app = require('./config/server');

/* port listen */
var server = app.listen(80, function(){
    console.log('Servidor Online!');
});

var io = require('socket.io').listen(server);

app.set('io', io);

/* new connection websocket */
io.on('connection', function(socket){
    console.log('Úsuario Conectou');

    socket.on('disconnect', function(){
        console.log('Úsuario desconectou');
    });

    socket.on('msgParaServidor', function(data){

        /* dialogs */
        socket.emit(
            'msgParaCliente', 
            {apelido: data.apelido, mensagem: data.mensagem }
        );

        socket.broadcast.emit(
            'msgParaCliente', 
            {apelido: data.apelido, mensagem: data.mensagem }
        );

        /* participants */
        if(parseInt(data.apelido_atualizado) == 0){
            socket.emit(
                'participantesParaCliente', 
                {apelido: data.apelido }
            );
    
            socket.broadcast.emit(
                'participantesParaCliente', 
                {apelido: data.apelido }
            );
        }
    });
});