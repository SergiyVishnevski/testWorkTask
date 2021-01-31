// 1. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4),
// вернет сумму переданных в параметры чисел.
// 2. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(),
// вернет массив переданных в параметры чисел.
// 3. Реализуйте счетчик вызова функции, работающий на замыканиях.
// 4. Пусть функция в замыкании хранит число 10. Сделайте так,
// чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.
// 5. Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0,
// а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.
// 6. Сделайте объект с тремя функциями, каждая из которых будет принимать
// параметром массив с числами. Сделайте так, чтобы первая функция возвращала
// сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.
// *** 7. Создайте функцию высшего порядка cartCounter(),
// в которой будет реализован функционал увеличения или уменьшения
// количества выбраного товара в корзине в зависимости от передаваемого id товара.
// Используйте механизм замыкания для решения задачи.
// const cart = {
//     products: [
//         {
//             id: 1,
//             name: "Milk",
//             price: 20,
//             quantity: 1
//         },
//         {
//             id: 2,
//             name: "Juice",
//             price: 30,
//             quantity: 2
//         },
//         {
//             id: 1,
//             name: "Fresh juice",
//             price: 40,
//             quantity: 3
//         }
//     ]
// }
// 8. В примере выше создайте методы, которые будут логировать данные всех продуктов массива.

// 1. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4),
// вернет сумму переданных в параметры чисел.

// function func (a) {
//     console.log(a);
//     return function (b) {
//         console.log(b);
//         return function (c) {
//             console.log(c);
//             return a + b + c
//         }
//     }
// }
// const result = func(2)(3)(4);
// console.log(result);
//====================================================================\\

// 2. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(),
// вернет массив переданных в параметры чисел.

// function func (a) {
//     const arr = [];
//     arr.push(a);
//     return function (b) {
//         arr.push(b);
//         return function (c) {
//             arr.push(c);
//             return function (d) {
//                 arr.push(d);
//                 return function () {
//                     return arr;
//                 }
//             }
//         }
//     }
// }
// function pusher (...parameter)  {
//     // array.push(parameter)
//     return parameter;
// }

// function func (a) {
//     // const arr = [];
//     // pusher(arr, a)
//     return function (b) {
//         // pusher(arr, b)
//         return function (c) {
//             // pusher(arr, c)
//             return function (d) {
//                 // pusher(arr, d)
//                 return function () {
//                     return pusher(a,b,c,d,e);
//                 }
//             }
//         }
//     }
// }

// console.log(pusher);
// const result = func(2)(3)(4)(5)();
// console.log(result);
//=================================================================\\

// 3. Реализуйте счетчик вызова функции, работающий на замыканиях.

// const addOne = function (number = 0) {
//     // let number = 0;
//     return function (step=1) {
//         return (number += step);
//     };
// };
// const counter = addOne();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const oneMoreCounter = addOne(50);
// console.log(oneMoreCounter());
// console.log(oneMoreCounter());
// console.log(oneMoreCounter());
//=================================================================\\

// 4. Пусть функция в замыкании хранит число 10. Сделайте так,
// чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.

// const addOne = function () {
//     let number = 10;
//     return function () {
//         return (number -= 1);
//     };
// };
// const counter = addOne();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

//=================================================================\\
// 5. Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0,
// а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.

// function createCouter (number = 10) {
//     return function (step = -1) {
//         // return !number ? 'отсчет окончен' : number += step;
//         // return number === 0 ? 'отсчет окончен' : number += step;
//         return number ?  number += step : 'отсчет окончен';
//     }
// }
// const counter = createCouter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
//=================================================================\\

// 6. Сделайте объект с тремя функциями, каждая из которых будет принимать
// параметром массив с числами. Сделайте так, чтобы первая функция возвращала
// сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

// const object = {
//   pow(array, exp) {
//     let sum = 0;
//     for (const element of array) {
//       sum += Math.pow(element, exp);
//     }
//     return console.log(sum);
//   },
//   sum(array) {
//     this.pow(array, 1);
//     // let sum = 0;
//     // for (const element of array) {
//     //   sum += Math.pow(element, 1); }
//     // return console.log(sum)
//   },
//   square(array) {
//     this.pow(array, 2);
//     // let square = 0;
//     // for (const element of array) {
//     //   square += Math.pow(element, 2);}
//     // return console.log(square);
//   },
//   triple(array) {
//     this.pow(array, 3);
//     // let triple = 0;
//     // for (const element of array) {
//     //   triple += Math.pow(element, 3);}
//     // return console.log(triple);
//   },
// };
// object.sum([1, 2, 3, 4]);
// object.square([1, 5, 6]);
// object.triple([1, 5, 6]);
//=================================================================\\

// *** 7. Создайте функцию высшего порядка cartCounter(),
// в которой будет реализован функционал увеличения или уменьшения
// количества выбраного товара в корзине в зависимости от передаваемого id товара.
// Используйте механизм замыкания для решения задачи.
// const cart = {
//   products: [
//     {
//       id: 1,
//       name: "Milk",
//       price: 20,
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: "Juice",
//       price: 30,
//       quantity: 2,
//     },
//     {
//       id: 3,
//       name: "Fresh juice",
//       price: 40,
//       quantity: 3,
//     },
//   ],
// };
// function cartCounter(quantity) {
//   return function (step = 1) {
//     return (quantity += step);
//   };
// }
// function findProductById(array, id) {
//   for (const product of array) {
//     if (product.id === id) return product;
//   }
// }
// function logger(counter, product) {
//   product.quantity = counter();
//   product.quantity = console.group(`${product.name}: `);
//   console.log(product.name);
//   console.log(product.price);
//   console.log(product.quantity);
//   console.groupEnd();
// }
// function getValue(array, id) {
//   const products = findProductById(array, id);
//   const counter = cartCounter(products.quantity);
//   logger(counter, product);
// }

// // console.log(counter1());
// // console.log(findProductById(3));
// getValue(cart.products);

//=================================================================\\

// 8. В примере выше создайте методы, которые будут логировать данные всех продуктов массива.
//=================================================================\\
