var Client = {};
Client.modojuego;
Client.socket = io.connect();


Client.askNewPlayer = function(){
    Client.socket.emit('newplayer');
};
Client.mover = function(direccion){
    //console.log(direccion);
    Client.socket.emit("movers", direccion);
}
Client.envDisparo = function(){
    Client.socket.emit("sDisparo")
}
Client.aumentar = function(){
    console.log('si aumenta');
    Client.socket.emit("aumenta");
}

Client.socket.on('newplayer',function(data){
    //alert("kjkschbjscdjhb");
    //console.log("listo");
        stage.addNewPlayer(data.id,data.x,data.y);
        console.log(data.id);
       // console.log(data.id);
});
Client.socket.on('allplayers',function(data){
    console.log(data);
    for(var i = 0; i < data.length; i++){
        stage.addNewPlayer(data[i].id,data[i].x,data[i].y);
    }
});

Client.socket.on('remove',function(id){
    stage.removePlayer(id);
});

Client.socket.on('empezarjuego',function(){
    juego();
});

Client.socket.on('nDisparo',function(id){
    stage.disparo(id);
    //stage.removePlayer(id);
});

Client.socket.on('mover',function(data){
    stage.mover(data.dir, data.id);
})