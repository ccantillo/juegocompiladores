var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);


app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/src/js'));
app.use('/assets',express.static(__dirname + '/assets'));
app.use('/dist',express.static(__dirname+'/node_modules/phaser/dist'))
app.use('/src',express.static(__dirname + '/src'));
app.use('/escenas',express.static(__dirname + '/src/escenas'));
app.use('/',express.static(__dirname + '/'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server.listen(8081,function(){ // Listens to port 8081
    console.log('Listening on '+server.address().port);
});


server.lastPlayderID = 0; // Keep track of the last id assigned to a new player

io.on('connection',function(socket){
    socket.on('newplayer',function(){
        socket.player = {
            id: server.lastPlayderID++,
            x: 50,
            y: 300
        };

        //if(socket.player.id <=7){
            console.log("este es tu id"+socket.player.id);

            socket.emit('allplayers',getAllPlayers());
        socket.broadcast.emit('newplayer', socket.player);
        //}
        socket.on('disconnect',function(){
            io.emit('remove',socket.player.id);
            socket.player.id-=2;
        });
        socket.on('movers',function(direccion){
            socket.player.dir = direccion;
            io.emit('mover', socket.player);
        });
        socket.on('sDisparo',function(){
            io.emit('nDisparo', socket.player.id);
        });
    });
});

function getAllPlayers(){
    var players = [];
    Object.keys(io.sockets.connected).forEach(function(socketID){
        var player = io.sockets.connected[socketID].player;
        if(player) players.push(player);
    });
    return players;
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}