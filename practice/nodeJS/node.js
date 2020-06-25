const http = require('http');
const os = require('os');
http.createServer((request, response) => {
    const user = os.userInfo();
    response.end('Hello ' + user.username);
}).listen(5000, 'localhost', () => {
    console.log('server has been launched on the 5000 port')
});

