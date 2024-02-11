const buffer = new Buffer.from("Vishwas", "utf-8");

// เขียนข้อมูลลงไปใน buffer โดยจะมีขนาดสูงสุดตามขนาดของ buffer ตอนแรก
// ถ้าใส่ข้อมูลลงไปมากกว่าขนาดของ buffer ข้อมูลที่เกินจะหายไป
buffer.write("Code");

console.log(buffer.toString()); // แปลงข้อมูลเป้น string
console.log(buffer.toJSON());
console.log(buffer); // raws binary data ในรูปแบบ Hex โดยเราต้องนำไปแปรงเป็น binary เพื่อหา decimal number
