const cryto = require("node:crypto"); // รวมฟังชันที่ใช้ในการเข้ารหัส

// จากเดิม default ของ thread pull คือ 4, เราสามารถตั้งค่า env เพื่อระบุขนาดของ thread ได้
// process.env.UV_THREADPOOL_SIZE = 6;
const MAX_CELLS = 12;

const start = Date.now();
for (let i = 0; i < MAX_CELLS; i++) {
    cryto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
    });
}

// const start = Date.now();
// cryto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// cryto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// cryto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// cryto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// cryto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// cryto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// console.log(`Hash: ${Date.now() - start} millisecons`);

// https://www.youtube.com/watch?v=qCC56uJh3bk&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=41