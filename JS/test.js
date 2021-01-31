'use script'

//==========проверка на тип===============\\

// const switcher = (data) => {
//     // console.log(typeof data);
//     if (typeof data === "string") {
//         console.log(`Type: string`);
//     }
//     if (typeof data === "number"){
//         console.log(`Type: number`);
//     }
//     if (typeof data === "object") {
//         console.log(`Type: object`);
//     }
// }
// switcher("lkdsgfkadflk");
//=======================================\\

// const arr = ['Liverpool', 'Real', 'Chelsea', 'Milan', 'PSG', 'Arsenal'];
// const findName = (arr, name) => {
    
//     for (const element of arr) {
//         if (element === name) {
            
//         }
//     }
//     return false;
// }
// console.log(findName(arr, 'Liverpool'));

// console.log(нашли name 3 раза);
// console.log(findName(arr));

// const letFindCar = (anyArray, anyElemToFind) => {
//     let sumCars = [];
//     let message = " ";

//     for (const elem of anyArray) {
//         if (elem !== anyElemToFind) {
//            message = "Не нашли"
//         }
        
//         if (elem === anyElemToFind) {
//             sumCars.push(elem);
//             message = `Мы нашли: ${anyElemToFind}, ${sumCars.length} раза!!!`
//         } 

//     }
//     // // console.log(`Мы нашли: ${anyElemToFind}, ${sumCars.length} раза!!!`);
//     return message;
    

//     // return false;
// }
// console.log(letFindCar(carArray, 'audi'));


'use strict'
// Напиши функцию findBestEmployee(employees), 
// которая принимает объект сотрудников и возвращает имя самого 
// продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненых задач содержатся как 
// свойства объекта в формате "имя":"кол-во задач".

//======================decision=================\\
const findBestEmployee = function(employees) {
    const values = Object.values(employees);
    const valuesMax = Math.max(...values);
    for (let key in employees) {
        if (employees[key] === valuesMax)
        return key;
    };
    return '';
  };
  
 
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux
  //================================================\\


