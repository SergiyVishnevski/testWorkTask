// Объекты
// ==============================================================================
const products = [
    {
      id: "1",
      name: "milk",
      value: "Молоко",
      price: 20,
      sale: true,
      quantity: 10,
    },
    {
      id: "2",
      name: "water",
      value: "Вода",
      price: 10,
      sale: false,
      quantity: 50,
    },
    {
      id: "3",
      name: "juice",
      value: "Сок",
      price: 34,
      sale: true,
      quantity: 24,
    },
    {
      id: "4",
      name: "fruitDrink",
      value: "Морс",
      price: 32,
      sale: true,
      quantity: 25,
    },
    {
      id: "5",
      name: "milkShake",
      value: "Молочный коктейль",
      price: 37,
      sale: false,
      quantity: 37,
    },
  ];
  // 1. Создайте функцию getSaleProducts(), которая 
  //   вернет новый массив со свойством sale равным true.
  
//   function getSaleProducts (array, prop) {
//         const arr = [];
//         for (const item of array) {
//             if (item[prop]){
//                 arr.push(item);
//             }
//         }
//         return arr;
//   }
//   console.log(getSaleProducts(products, 'sale'));


// function getSaleProducts (array, prop) {
//     const arr = [];
//     for (const item of array) {
//         if (item[prop] > 30 && item[prop] < 35){
//             arr.push(item);
//         }
        
//     }
//     return arr;
// }
// console.log(getSaleProducts(products, 'price'));

// function getSaleProducts (array, prop) {
//     const arr = [];
//     for (const item of array) {
//         if (item[prop] > 30){
//             arr.push(item);
//         }
        
//     }
//     return arr;
// }
// console.log(getSaleProducts(products, 'quantity'));

//===============================================================\\

// 2. Создайте функцию getProductsName(), которая вернет новый массив 
// со всеми названиями продуктов на русском языке.

// function getProductsName(array, ) {
//     const arr = [];
//     for (const item of array){
//         // console.log(item);
//         arr.push(item.value);
//     }

//     return arr;
// }
// console.log(getProductsName(products));
//===============================================================\\

// 3. Создайте функцию getTotalQuantity(), 
// которая вернет общую сумму всех товаров на складе (свойство quantity).

// function getSaleProducts (array, prop) {
//     const arr = [];
//     for (const item of array) {
//         if (item[prop]){
//             arr.push(item);
//         }
//     }
//     return arr;
// }
// console.log(getSaleProducts(products, 'sale'));


// function getTotalQuantity (array) {
//     let total = 0;
//     for (const item of array) {
//         total += item.quantity;
//         // console.log('item :>> ', item);
//     }
//     return total
// }
// const result = getTotalQuantity(getSaleProducts(products, 'sale'));
// console.log(result);

//===============================================================\\

// 4. Создайте функцию getProductById(), 
// которая будет возвращать продукт по id.

// function getProductById(array, id) {
    
//     for (const item of array) {
//         // console.log(item);
//        if (item.id === id) {
//             return item;
//        }
//     }
// }

// // getProductById(products, 3);
// const result = getProductById(products, '3');
// console.log(result);

//===============================================================\\

// 5. Создайте функцию deleteProductById(), 
// которая будет удялять из исходного массива products товар по id.

// const deleteProductById = (array, prop, value) => {
//     for ( const item of array){
//         // console.log(item);
//         if (item[prop] === value) {
//             // console.log(item);
//             array.splice(array.indexOf(item), 1);
//         }
//     }
//     return array
// }
// const result = deleteProductById (products, 'id', '4');
// console.log(result);

//================================================================\\

// 6. Создайте функцию createProduct(), 
// которая будет добавлять новый продукт в исходный массив products. 
// Товар передается в функцию в виде объекта

// function createProduct(array, newObject) {
//     array.push(newObject)
// }

// const coffee = {
//     id: "6",
//     name: "coffe",
//     value: "Кофе",
//     price: 100,
//     sale: false,
//     quantity: 50,}

// const tea = {
//     id: "7",
//     name: "tea",
//     value: "Чай",
//     price: 20,
//     sale: false,
//     quantity: 100,}
// createProduct(products, coffee);
// createProduct(products, tea);

// console.table(products);

//================================================================\\

// 7. Создайте функцию findProductByName(), 
// которая будет возвращать объект из массива products в 
// зависимости от передаваемого значения name или value.

// const  findProductByName = (array, prop) => {
//     for (const item of array) {
//         if (item.name  === prop || item.value === prop) {
//             return item;
//         }
//     }
// }

// const result1 = findProductByName(products, "juice");
// const result2 = findProductByName(products, "Морс");
// console.log(result1, result2);

//================================================================\\

// 7. Создайте функцию editProduct(), которая будет изменять объект products. 
// В качестве аргументов, в функцию будут передаваться id, 
// а также ключ и его значение, которое нужно перезаписать.
