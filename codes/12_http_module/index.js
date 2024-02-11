const http = require("node:http");

const server = http.createServer((req, res) => {
    const user = {
        username: "Mint Rosetta",
        age: 23
    };
    
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    
    // JSON.stringify แปลง javascript object เป็น json string
    // JSON.parse แปลง json string เป็น javascript object
    res.end(JSON.stringify(user));
});

server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});