const fs = require("node:fs");
const zlib = require("node:zlib"); // ใช้สำหรับ zip file

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file1.txt", {
    encoding: "utf-8",
    highWaterMark: 2
});

const writeacleStream = fs.createWriteStream("./file2.txt");
readableStream.pipe(gzip)
              .pipe(fs.WriteStream("./file1.txt.gz"))
// readableStream.on("data", (chunk) => {
//     console.log(chunk);
// });