const http = require('http');
const port = 3000;
const app = require('../BACKEND/app')
const server = http.createServer(app)


server.listen(port,()=>{
    console.log('server is runing',+port)
})