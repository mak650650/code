const http = require('http');
const server = http.createServer((request, response) => {
  
    eventEmitter.on('start', () => {
    console.log('started');
  });
});
server.listen(3000);
  