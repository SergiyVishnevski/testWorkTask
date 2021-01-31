
//===========TASK-8.MODULE-2.===============//

// let input = prompt("Enter login min = 4, max = 16");

// function isLoginValid(login, min = 4, max = 16) {
//   if (login === null) {
//     return false;
//   }
//   if (login.length >= min && login.length <= max) {
//     return true;
//   }
//   return false;
// }

// function isLoginUnique(allLogins, login) {
//   if (allLogins.indexOf(login) != -1) {
//     return false;
//   }
//   return true;
// }

// function addLogin(allLogins, login) {
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   if (isLoginValid(login)) {
//     if (isLoginUnique(allLogins, login)) {
//       allLogins.push(login);
//       message = SUCCESS;
//     } else {
//       message = REFUSAL;
//     }
//   } else {
//     message = ERROR;
//   }

//   return message;
// }

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// //console.log(isLoginValid(input));
// //console.log(isLoginUnique  (logins, input))

// console.log(addLogin(logins, "Ajax"));
// // // 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"));
// // // 'Такой логин уже используется!'

// console.log(addLogin(logins, "Zod"));
// // // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// // // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, input));


// function getCart (name, age, status, orders, price) {
//     console.log(arguments.length);
    
// }
// getCart('name, age, status, orders, price');

// function getParams (name, age, ...rest) {
// console.log(name);
// console.log(age);
// console.log(rest);
// console.log(Array.isArray(rest));
// console.log(typeof rest);
// }

// // getParams('Vova', 20);
// // getParams('Vova', 20, 'status');
// getParams('Vova', 20, 'orders', 452);


// // Rest             Spread
// // ...       =        ...
// // function getCart(name, age, status, orders, price) {
// //    console.log(getCart.length);
// //   console.log(arguments.length);
// // // }
// //  getCart('Mike', 'Sveta', 'Nick');
// function getParams(name, age, ...rest) {
//     console.log(name);
//     console.log(age);
//     console.log(rest);
//     console.log(Array.isArray(rest));
//     console.log(typeof rest);
//     }
//     // getParams('Vova', 20);
//     getParams('Vova', 20, 'status');
//     // getParams('Vova', 20, 'orders', 451);


//===============||==============\\
// let janres = ['rap', 'rock', 'pop'];

// janres.push('jazz');

// console.log(janres);


// function customPush(array,...element) {
//     if (!Array.isArray(array)) {
//         console.log('Array is required');
//         return;
//     }
//     let resultArray = [...array, ...element];

//     return resultArray;
// }
// console.log(customPush(['rap', 'rock', 'pop'], 'trance', 'vocal', 'bluz'));
const { name, age, ...props } = { name: 'Poly', age: 3, games: 47, isOnline: false };
console.log( { name, age, ...props } = { name: 'Poly', age: 3, games: 47, isOnline: false });