const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    /* 
        โดยปกติ pipe จะรับ writable destination (ตำแหน่งที่สามารถเขียนข้อมูลได้)
        
        โดย res นี้ก็เป็น writable destination เหมือนกัน โดยจะเป็นการเขียนเนื้อหาลงในเว็บเพจ
        ก่อนส่งไปที่ client 

        โดยใน code นี้ จะเป็นการค่อย ๆ อ่านข้อมูล index.html และส่งไปที่ client ทีละ chunk
    */
    fs.createReadStream(__dirname + "/htmlResponse.html", {
        encoding: "utf-8",
        highWaterMark: 1
    }).pipe(res);
});

server.listen(3000, () => console.log("Server listing at http://localhost:3000"));