// Get net module 
const net = require('net');
const { hostname } = require('os');
const prompt = require('prompt-sync')();

//Configuration ===================================
const PORT = 3000;
const HOST = '127.0.0.1';
//=================================================


//Create an instance of the server and attach the client handling callback
const server = net.createServer(onClientConnection);

server.listen(PORT,HOST,()=>{
  console.log(`Server is listening on :-${HOST}:${PORT}`)
})
function onClientConnection(socket) {
  socket.on('data',(data)=>{
    console.log(`>>Message received:-${data}`);
    let serverResp = prompt('Respond:-');
    if(serverResp === 'leave'){
      socket.end()
    }
    else{
      socket.write(serverResp.toString());
    }
  })
  socket.on('close',()=>{
    console.log(`${socket.remoteAddress}:${socket.remotePort} : Disconnected!`);
  });
  socket.on('error',function(error){
    console.error(`${socket.remoteAddress}:${socket.remotePort}: Connection Error! :-${error}`);
  });

}
