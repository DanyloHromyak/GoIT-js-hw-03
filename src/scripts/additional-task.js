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
};

const apple = {
  name: "Яблуко",
  price: 9.99,
  quantity: 3,
};

const orange = {
  name: "Апельсин",
  price: 12,
  quantity: 1,
};

cart.add(apple);
cart.add(orange);
console.table(cart.getAll());
console.log(cart.getTotalPrice());
// cart.remove('Апельсин');
cart.clear();

console.log(cart.getAll());
