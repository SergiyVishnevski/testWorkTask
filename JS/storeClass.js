class Shop {
  #shopItems;

  constructor(name, address, items) {
    this.#shopItems = items;
    this.name = name;
    this.address = address;
    // this.items = items;
  }
  #generateId = function () {
    const randomNumber = Math.random();
    return randomNumber.toString().slice(3);
  };
  showItems() {
    for (const item of this.#shopItems) {
      const { id, name, price, amount, category } = item;
      console.log(
        `Id: ${id}, Name: ${name}, Price: ${price}, Amount: ${amount} Category: ${category}`
      );
    }
  }
  addItems(name, price, amount, category) {
    const item = {
      id: this.#generateId(),
      name,
      price,
      amount,
      category,
    };
    this.#shopItems.push(item);
  }
  removeItems(productName) {
    for (const item of this.#shopItems) {
      if (item.name === productName) {
        const index = this.#shopItems.indexOf(item);
        this.#shopItems.splice(index, 1);
      }
    }
  }
  updateItems(productName, newName) {
    let itemsLength = this.#shopItems.length;
    for (let i = 0; i < itemsLength; i += 1) {
      if (this.#shopItems[i].name === productName) {
        this.#shopItems[i].name = newName;
      }
    }
  }
  findItem(itemNameToFind) {
    let findItemSomeThings = this.#shopItems.find(
      (item) => item.name === itemNameToFind
    );
    if (findItemSomeThings) {
      return findItemSomeThings;
    }
    console.log("НЕ нашли!!!");
    return;
  }
  sortByCategory(categoryName) {
    let findOfItemsOfCategory = this.#shopItems.filter(
      (item) => item.category === categoryName
    );
    if (findOfItemsOfCategory) {
      return findOfItemsOfCategory;
    }
    console.log("НЕ нашли!!!");
    return;
  }
  showCart() {}
  updateCart() {}
  removeFromCart() {}
}
const items = [
  { id: 1, name: "bananes", price: 25, amount: 200, category: "fruits" },
  { id: 2, name: "apples", price: 32, amount: 150, category: "fruits" },
  { id: 3, name: "tomato", price: 50, amount: 100, category: "vegetables" },
  { id: 4, name: "potato", price: 10, amount: 500, category: "vegetables" },
];
const shop = new Shop("Fruits Store", "Kiev", items);
// // // console.log(shop.generateId());
// // console.log(shop.showItems());
// // console.log(shop.addItems("melon", 40, 70, "fruits"));
// // console.log(shop.showItems());
// // shop.removeItems("tomato");
// // console.log(shop.showItems());
// // shop.updateItems("potato", "cucumber");
// // console.log(shop.showItems());
// // console.log(shop.name);
// // console.log(shop.address);
// // // console.log(shop.#shopItems);

// console.log(shop.findItem("melon"));
console.log(shop.sortByCategory("fruits"));

// const peoples = [
//   { id: 1, name: "Vova", age: 17, budget: 4000, isComplete: true },
//   { id: 2, name: "Mike", age: 25, budget: 3400, isComplete: false },
//   { id: 3, name: "Sara", age: 30, budget: 400, isComplete: true },
//   { id: 4, name: "Bob", age: 15, budget: 200, isComplete: false },
// ];

// const findUserName = (userName, peoplesArray) => {
//   //   console.log(userName);
//   //   console.log(peoplesArray);
//   return peoplesArray.find((person) => person.name === userName);
// };
// const result = findUserName("Sara", peoples);
// console.log(result);
