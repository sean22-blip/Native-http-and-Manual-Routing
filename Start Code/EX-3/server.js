import fs from 'fs';
// server.js
import http from 'http';
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Welcome to the Home Page');
    }

    if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <form method="POST" action="/contact">
            <input type="text" name="username" placeholder="Your name" />
            <button type="submit">Submit</button>
          </form>
        `);
        return;
    }

    if (url === '/contact' && method === 'POST') {
        // Implement form submission handling
        // const name = req.on('name');
        // const obj = JSON.parse(name);
        // console.log(name);
        // console.log(obj);
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();

        })
        req.on('end', () => {
            const parsed = new URLSearchParams(body);
            const username = parsed.get('username');
             fs.appendFile('./Start Code/EX-3/submissions.txt', username + '\n', (err) => {
    if (err) console.log('Error:', err);
    else console.log('Name saved:', username);
          res.writeHead(200, { 'Content-Type' : 'text/plain'});
        res.end(`Name: ${username}`);
});
        })

    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
/*
1. The reason why we listen for data and events when handling post is becaues 
post arrives in chunk not all at once. end shows when the chunks of data are done.
2. It would be incomplete or corrupted
3.It is call application/x-www-form-urlencoded
4. writeFile overwrites the files everytime where as appendFile just adds to the new line
*/  
