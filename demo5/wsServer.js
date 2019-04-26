var app = require('http').createServer();
var io = require('socket.io')(app);

var clientCount = 0;//port order of client
var PORT = 3000;//the number of client

app.listen(PORT);

io.on('connection',function(socket){
    clientCount++;
    socket.nickname = "user "+clientCount;
    io.emit("enter ",socket.nickname+" comes in!");
    socket.on('message',function(str){
        io.emit('message',socket.nickname+" says: "+str);
    })
    socket.on("disconnect",function(){
        io.emit('leave',socket.nickname+" left.");
    })
})

console.log("websocket server listening on port "+PORT);