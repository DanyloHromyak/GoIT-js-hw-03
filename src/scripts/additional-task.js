const cart = {
  products: [],
  add(product) {
    this.products.push(product);
  },
  remove(productName) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === productName) {
        this.products.splice(i, 1);
        return;
      }
    }
  },
  clear() {
    this.products = [];
  },
  getAll() {
    return this.products;
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].price * this.products[i].quantity;
    }
    return totalPrice;
  },
  increaseQuantity(productName) {
    for (const product of this.products) {
      if (product.name === productName) {
        product.quantity++;
        return;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const product of this.products) {
      if (product.name === productName) {
        product.quantity--;
        if (product.quantity === 0) {
          this.remove(productName);
        }
        return;
      }
    }
  },
  changePrice(productName, newPrice) {
    for (const product of this.products) {
      if (product.name === productName) {
        product.price = newPrice;
        return;
      }
    }
  },
  changeQuantity(productName, newQuantity) {
    for (const product of this.products) {
      if (product.name === productName) {
        product.quantity = newQuantity;
        return;
      }
    }
  },
  getProduct() {
    const names = []
    for (const product of this.products) {
      names.push(product.name);
    }
    return names;
  },
  generate() {
    const predictions = ["Вам присняться овечки💀",
    "Ви програєте всі гроші на паріматчі😉",
    "Ви невдаха!😁",
    "Вас вкусить комар👺"];
    let random = Math.floor(Math.random() * predictions.length);
    return predictions[random];
  },
  order() {
    let message = "";
    let order = '';
    const divider = '---------\n';
    for (const product of this.products) {
      order += `${product.name}:  ${product.price} X ${product.quantity} = ${
        product.quantity * product.price
      }\n${divider}`;
    }
    message += divider;
    message += `Чек\n`;
    message += `${divider}\n`;
    message += order;
    message += `Сума: ${this.getTotalPrice()} ₴\n`;
    message += divider;
    message += `Дякуємо за покупку!\n`;
    message += divider;
    message += this.generate();
    console.log(message);
    return order;
  },

};

const apple = {
  name: "Яблуко",
  price: 9.99,
  quantity: 3,
  totalPrice: 12,
};

const orange = {
  name: "Апельсин",
  price: 12,
  quantity: 1,
};

const { name: productName, totalPrice} = apple;
console.log(productName);
console.log(totalPrice);

const products = ["apple", "orange"];
const [product1, product2] = products;
console.log(product2)

cart.add(apple);
cart.add(orange);
cart.changePrice("Апельсин", 10);
cart.increaseQuantity('Яблуко');
cart.generate();
console.log(cart.getProduct());
cart.order();
console.table(cart.getAll());
console.log(cart.getTotalPrice());
cart.remove('Апельсин');
cart.clear();

console.log(cart.getAll());
