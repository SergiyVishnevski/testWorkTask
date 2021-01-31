//============================================================\\

// CRUD (create, read, update, delete)

const generateId = function () {
  const randomNumber = Math.random();
  return randomNumber.toString().slice(3);
};
// console.log(generateId());

const shop = {
  name: "Fruits Store",
  address: "Kyiv",
  items: [
    { id: 1, name: "bananes", price: 25, amount: 200, category: "fruits" },
    { id: 2, name: "apple", price: 32, amount: 150, category: "fruits" },
    { id: 3, name: "tomato", price: 50, amount: 100, category: "vagetebles" },
    { id: 4, name: "potatos", price: 10, amount: 50, category: "vagetebles" },
  ],
  showItems() {
    for (const item of this.items) {
      //   console.log(item);
      const { id, name, price, amount, category } = item;
      console.log(
        `Id: ${id}, Name: ${name}, Price: ${price}, Amount: ${amount}, Category: ${category}`
      );
    }
  },
  addItem(name, price, amount, category) {
    const item = {
      id: generateId(),
      name,
      price,
      amount,
      category,
    };
    this.items.push(item);
  },
  removeItem(productName) {
    // for (const item of this.items) {
    //   if (item.name === productName) {
    //     const index = this.items.indexOf(item);
    //     this.items.splice(index, 1);
    //   }
    // }
    let itemLength = this.items.length;
    for (let i = 0; i < itemLength; i += 1) {
      if (this.items[i].name === productName) {
        this.items.splice(i, 1);
      }
    }
  },
  updateItem(productName, newName) {
    let itemLength = this.items.length;
    for (let i = 0; i < itemLength; i += 1) {
      if (this.items[i].name === productName) {
        this.items[i].name = newName;
      }
    }
  },
  displayToPage() {
    let html = `
          <h1>${this.name}</h1>
    <h2>${this.address}</h2>
    <h3>Catalogue</h3>
    <div class="container">
      <ul class="list">
        <li class="list-item"></li>
        <li class="list-item"></li>
        <li class="list-item"></li>
        <li class="list-item"></li>
      </ul>
    </div>
            `;
    return (document.body.innerHTML = html);
  },
};
shop.displayToPage();
// shop.showItems();
// shop.addItem("strawberry", 200, 50, "fruits");
// shop.showItems();
// shop.removeItem("potatos");
// shop.showItems();
// shop.updateItem("bananes", "baby-bananes");
// shop.showItems();
//============================================================\\
// document.body.innerHTML = "Hello World!";
