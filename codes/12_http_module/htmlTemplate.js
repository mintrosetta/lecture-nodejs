const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    const username = "Mint Rosetta";
    let template = fs.readFileSync("./htmlTemplate.html", "utf-8");
    template = template.replace("{{username}}", username);

    res.end(template);

    // fs.createReadStream(__dirname + "/htmlResponse.html", {
    //     encoding: "utf-8",
    //     highWaterMark: 1
    // }).pipe(res);
});

server.listen(3000, () => console.log("Server listing at http://localhost:3000"));

// https://www.youtube.com/watch?v=S1QOZU5jOcw&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=35