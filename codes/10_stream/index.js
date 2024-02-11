const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 2 // ทำให้ data ต่อ chunk มีขนาด 2 byte
});

const writeableStream = fs.createWriteStream("./file2.txt");

// default ของ chunk จะอยู่ที่ 64 gb;
readableStream.on("data", (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);
});