// server.js


//     if (url === '/' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <head><title>Home</title></head>
//                 <body>
//                     <h1>Welcome to the Home Page</h1>
//                     <p>This is a simple Node.js server.</p>
//                 </body>
//             </html>
//         `);
//     }
//       else if (url === '/about' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <head><title>About us:</title></head>
//                 <body>
//                     <h1>Welcome to About us page</h1>
//                     <p>at CADT, we hate node.js!!</p>
//                 </body>
//             </html>
//         `);
//     } else  if (url === '/contact-us' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <head><title>Contact us Page!</title></head>
//                 <body>
//                     <h1>Welcome to the contact Page</h1>
//                     <p>You can reach us vai email...</p>
//                 </body>
//             </html>
//         `);
//     }  else if (url === '/products' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <head><title>products</title></head>
//                 <body>
//                     <h1>Welcome to the Products Page</h1>
//                     <p>Buy one get one...</p>
//                 </body>
//             </html>
//         `);
//     }
//       else if (url === '/projects' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <head><title>Projects</title></head>
//                 <body>
//                     <h1>Welcome to the Projects Page</h1>
//                     <p>Here are our awesome projects</p>
//                 </body>
//             </html>
//         `);
//     }
//     // Implement more routes here
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         return res.end('404 Not Found');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is running at http://localhost:3000');
// });

/*
trying to implement switch case :
*/
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);
switch(url){
    case '/':
    switch (method){
        case 'GET':
            res.writeHead(200, {'Content-Type' : 'text/html'});
            return res.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a simple Node.js server.</p>
                </body>
            </html>
        `);

    }
    break;
     case '/about':
    switch (req.method){
        case 'GET':
              res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>About us:</title></head>
                <body>
                    <h1>Welcome to About us page</h1>
                    <p>at CADT, we hate node.js!!</p>
                </body>
            </html>
        `);
    }
    break;
     case '/contact-us':
    switch (req.method){
        case 'GET':
           res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>Contact us Page!</title></head>
                <body>
                    <h1>Welcome to the contact Page</h1>
                    <p>You can reach us vai email...</p>
                </body>
            </html>
        `);

    } 
    break;
    case '/products':
    switch (req.method){
        case 'GET':
             res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>products</title></head>
                <body>
                    <h1>Welcome to the Products Page</h1>
                    <p>Buy one get one...</p>
                </body>
            </html>
        `);
    }break; 
    case '/projects':
    switch(req.method){
        case 'GET':
     res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>products</title></head>
                <body>
                    <h1>Welcome to the projects Page</h1>
                    <p>Here are our awesome projects</p>
                </body>
            </html>
        `);
    }
    break;
    default:

          res.writeHead(404, { 'Content-Type': 'text/html' });
          return res.end(`<h1>Unavailable!!!</h1>`);
}
});
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
/*
Answer:
1. when we visit a URL that doesn't match any of the three defined url it would shows a 404 errors
2. The reason why we checked both the req.url and req.method because the same url can be use with different http method
and each method mean different action
3. the type of MIME type that we set when returning HTML instead of plain text is text/html
4. The reason why this routing logic become harder to manage as routes grow because we keep typing it manually 
5. the benifit the framework offer to simplify this logic is swtich case  
*/