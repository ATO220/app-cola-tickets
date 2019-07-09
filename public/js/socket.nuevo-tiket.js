//Comando para establecer la conexion
var socket = io();

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});



var label = $('#lblNuevoTicket');

$('button').on('click', function(){
    socket.emit('siguienteTicket', null, function(siguienteTicket){
        label.text(siguienteTicket);
    });
})

// on 'estadoActual'

socket.on('estadoActual', function(data){
    if (data.actual === 'Ticket 0'){
        label.text('Sin Tickets');
    }else{
        label.text(data.actual);
    }
    
});