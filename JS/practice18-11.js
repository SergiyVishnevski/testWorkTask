// const storagePrice = {
//   apple: 5,
//   orange: 10,
//   melon: 15,
//   banana: 5,
// };
// const userOrder1 = {
//   orange: 7,
//   melon: 5,
//   banana: 10,
// };
// const userOrder2 = {
//   apple: 3,
//   orange: 15,
//   melon: 10,
// };
// const calculateOrderPrice = function (userOrder, storage) {
//   let sum = 0;

//   for (let order in userOrder) {
//     // console.log(userOrder[order]);
//     // console.log(storage[order]);
//     sum += userOrder[order] * storage[order];
//   }
//   return sum;
// };
// console.log(calculateOrderPrice(userOrder1, storagePrice));
// console.log(calculateOrderPrice(userOrder2, storagePrice));

//============================================================\\

// const users = [
//   {
//     name: "Virgil",
//     age: "28",
//   },
//   {
//     name: "Trent",
//     age: "23",
//   },
//   {
//     name: "Jordan",
//     age: "25",
//   },
//   {
//     name: "Sadio",
//     age: "21",
//   },
//   {
//     name: "Joel",
//     age: "27",
//     status: "qwerty",
//   },
// ];

// const setStatus = function (array, userName) {
//   let copyUsers = [...array];

//   for (let user of copyUsers) {
//     // console.log(user);
//     user.status = "player";
//     //   users[2].status = "capitan";
//     // user.name == "Jordan" ? (user.status = "capitan") : (user.status = "player");
//     if (user.name === userName) {
//       user.status = "capitan";
//     }
//   }
//   return copyUsers;
// };
// setStatus();
// console.log(setStatus(users, "Jordan"));

// users[0].status = "capitan";
// users[1].status = "centerDef";

// console.table(users);
//============================================================\\

// // CRUD (create, read, update, delete)

// const generateId = function () {
//   const randomNumber = Math.random();
//   return randomNumber.toString().slice(3);
// };
// // console.log(generateId());

// const shop = {
//   name: "Fruits Store",
//   affress: "Kyiv",
//   items: [
//     { id: 1, name: "bananes", price: 25, amount: 200, category: "fruits" },
//     { id: 2, name: "apple", price: 32, amount: 150, category: "fruits" },
//     { id: 3, name: "tomato", price: 50, amount: 100, category: "vagetebles" },
//     { id: 4, name: "potatos", price: 10, amount: 50, category: "vagetebles" },
//   ],
//   showItems() {
//     for (const item of this.items) {
//       //   console.log(item);
//       const { id, name, price, amount, category } = item;
//       console.log(
//         `Id: ${id}, Name: ${name}, Price: ${price}, Amount: ${amount}, Category: ${category}`
//       );
//     }
//   },
//   addItem(name, price, amount, category) {
//     const item = {
//       id: generateId(),
//       name,
//       price,
//       amount,
//       category,
//     };
//     this.items.push(item);
//   },
//   removeItem(productName) {
//     // for (const item of this.items) {
//     //   if (item.name === productName) {
//     //     const index = this.items.indexOf(item);
//     //     this.items.splice(index, 1);
//     //   }
//     // }
//     let itemLength = this.items.length;
//     for (let i = 0; i < itemLength; i += 1) {
//       if (this.items[i].name === productName) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   updateItem(productName, newName) {
//     let itemLength = this.items.length;
//     for (let i = 0; i < itemLength; i += 1) {
//       if (this.items[i].name === productName) {
//         this.items[i].name = newName;
//       }
//     }
//   },
// };
// // shop.showItems();
// // shop.addItem("strawberry", 200, 50, "fruits");
// // shop.showItems();
// shop.removeItem("potatos");
// // shop.showItems();
// shop.updateItem("bananes", "baby-bananes");
// shop.showItems();
//============================================================\\
// document.body.innerHTML = "Hello World!";
