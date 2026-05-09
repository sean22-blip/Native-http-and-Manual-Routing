// server.js
const http = require('http');
const server = http.createServer((req, res) => {
 res.write('Hello, World!');
 return res.end();
});
server.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});
/*
Answer 
1. i don't see any errors when  going to the localhost:3000 but i noticed that res.writeHead is missing. 
 Without res.writeHead()
 - server could crashes
 - browser reading it as plain text
 - broswer block the request completely that is why it says that it is declared but never used
 - security risk because of no content-type
2. The purpose of res.write() is use to send chunks of data. 
It is different from res.end() because res.end(). It use tell the client that all the data has been sent and should close the connection
3. When res.end() is not called, the connection stays open and hanging meaning the client have to keep waitng for the data to come which will never happens until eventually the timer runs out
4. The reason why we use http.createServer() instead of just callig a function directly 
- we call the direct function manually instead of using node.js
- we can only call it once run once, where as http.createServer() call once runs everytime
5. in order to make the server more resilient to such erros during development is: 
we have to use try-catch to catch exception such as uncaughtException
*/