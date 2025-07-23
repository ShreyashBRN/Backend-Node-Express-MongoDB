const http = require('http');
const requestHandler = require('./handler.cjs')
const server = http.createServer(requestHandler);



const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running on the PORT http://localhost:${PORT}`);
    
})