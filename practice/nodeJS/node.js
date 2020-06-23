const http = require('http');
http.createServer((request, response) => {
    response.end('Hello');
}).listen(5000, 'localhost', () => {
    console.log('server has been launched')
});