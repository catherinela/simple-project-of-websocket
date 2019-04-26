var ws = require("nodejs-websocket")
var clientCount = 0;//port order of client
var PORT = 3000;//the number of client
var server = ws.createServer(function (conn) {
    console.log("New connection")
    clientCount++;
    conn.nickname = 'user'+clientCount;
    broadcast(conn.nickname+'comes in');
    conn.on("text", function (str) {//server has receive a txt
        console.log("Received "+str);
        broadcast(str);
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed");
        broadcast(conn.nickname+'left');
    })
    conn.on("error",function(err){
    	console.log("handle err")
    	console.log(err)
    })
  
}).listen(PORT)

console.log("websocket server listening on port"+PORT);

function broadcast(str){
    server.connections.forEach(function(connection){
        connection.sendText(str);
    })
}