const https = require("node:https");

const MAX_CELLS = 6;

const start = Date.now();
for (let i = 0; i < MAX_CELLS; i++) {
    https.request("https://www.google.com", (res) => {
        // เมื่อข้อมูลไหลมาแล้ว
        res.on("data", () => {

        });

        // เมื่อจบการทำงาน
        res.on("end", () => {
            console.log(`Request: ${i + 1} ${Date.now() - start}`);
        });
    })
    .end();
}