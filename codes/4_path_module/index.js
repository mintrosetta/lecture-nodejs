const path = require("node:path");

// ดู full path ของไฟล์นี้
console.log(__filename);

// ดู full path ของโฟลเดอร์ที่ไฟล์นี้อยู่
console.log(__dirname);

// ดูชื่อไฟล์หรือโฟลเดอร์จาก full path
console.log(path.basename(__filename)); // ได้ชื่อไฟล์
console.log(path.basename(__dirname));  // ได้ชื่อโฟลเดอร์

// ดูนามสกุลของไฟล์
console.log(path.extname(__filename)); 

// รับข้อมูลของไฟล์ในรูปแบบของ object โดยจะมี root, dir, base, ext, name
console.log(path.parse(__filename));

// แปลง object จาก parse ให้กลายเป็น full path
console.log(path.format(path.parse(__filename)));

// ใช้ตรวจสอบว่าเป็น full path หรือไม้
console.log(path.isAbsolute(__filename));

// เป็นการนำ string มาต่อกันเพื่อสร้าง path ที่จะเข้าไปที่ไฟล์
console.log(path.join(__dirname, "folder1", "folder2", "index.html"));

// เป็นการนำ string มาต่อกันเพื่อสร้าง path แต่จะต่อ path ให้สมบูรณ์ขึ้นด้วย
console.log(path.resolve(__dirname, "folder1", "folder2", "index.html"));