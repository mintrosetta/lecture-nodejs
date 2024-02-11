const fs = require("node:fs");

// ตอนแรกเราจะได้ hex number มา เราต้องแปลงเป็น decimal number เพื่อหาเลขของอักขระ  จึงต้องแปรงเป้น UTF8
// read file with synchronous
console.log("First");
const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContent);
console.log("Second");
// read file with asynchronous
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
console.log("Three");

// เขียนข้อมูลลงไปในไฟล์ที่ระบุ
fs.writeFileSync("./greet.txt", "Hello World!");
// ระบุ flag a ทำให้เปลี่ยนจากการเขียนทับทั้งหมด เป็นเขียนต่อจากข้อมูลเดิม
fs.writeFile("./greet.txt", "Hello Vishwas!", { flag: "a" },(err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successful");
    }
});
