import { createServer } from "node:http";

const port = process.env.port ?? 3000;

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Hello, this is a simple Node.js server!\n');
});

server.listen(port, () => {
    const address = server.address();
    console.log(`Server is running at http://localhost:${address.port}/`);
});

