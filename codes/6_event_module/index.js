const path = require("node:path");
const PizzaShop = require(path.join(__dirname, "pizza-shop.js"));
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// // ใช้ดักจับ event จากชื่อที่ระบุ
// emitter.on("order-pizza", (size, topping) => {
//     console.log("Order received! Baking a " + size + " pizza with " + topping + " topping.");
// });

// // ใช้สำหรับปล่อย event โดยระบุชื่อของ event
// emitter.emit("order-pizza");
// emitter.emit("order-pizza", "large", "mushroom"); // ส่ง argument เข้าไปด้วย