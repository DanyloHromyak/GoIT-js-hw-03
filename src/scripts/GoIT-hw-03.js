// Завдання 1
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

// Завдання 2
const countProps = (obj) => Object.keys(obj).length;

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// Завдання 3
const findBestEmployee = (employees) => {
  let max = 0;
  let bestEmployee = null;
  for (const key of Object.keys(employees)) {
    if (employees[key] > max) {
      max = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

// Завдання 4
const countTotalSalary = (employees) => {
  let total = 0;
  for (const key of Object.keys(employees)) {
    total += employees[key];
  }
  return total;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

// Завдання 5
const products1 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
  let result = [];
  for (const key of Object.keys(arr)) {
    if (Object.keys(arr[key]).includes(prop)) {
      result.push(arr[key][prop]);
    }
  }
  return result;
};

console.log(getAllPropValues(products1, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropValues(products1, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products1, "category")); // []

// Завдання 6
const products2 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProducts, productName) => {
  let total = 0;
  for (const product of allProducts) {
    if (product.name === productName) {
      total = product.price * product.quantity;
    }
  }
  return total;
};

console.log(calculateTotalPrice(products2, "Радар")); // 5200
console.log(calculateTotalPrice(products2, "Дроїд")); // 2800

// Завдання 7
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    this.transactions.push({
      amount,
      type,
    });

    return this.transactions;
  },

  deposit(amount) {
    if (amount < 0) {
      console.log("Помилка! Будь ласка, введіть суму більше 0");
      return `Ваш поточний баланс на рахунку: ${this.balance}`;
    }
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);

    return `Ваш поточний баланс на рахунку після депозиту: ${this.balance}`;
  },

  withdraw(amount) {
    if (amount < 0) {
      console.log("Помилка! Будь ласка, введіть суму більше 0");
      return `Ваш поточний баланс на рахунку: ${this.balance}`;
    }
    if (amount > this.balance) {
      console.log("Помилка! Недостатньо коштів на рахунку");
      return `Ваш поточний баланс на рахунку: ${this.balance}`;
    }
    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);

    return `Ваш поточний баланс на рахунку після виводу грошей: ${this.balance}`;
  },

  getBalance() {
    return `Ваш поточний баланс на рахунку: ${this.balance}`;
  },

  getTransactionDetails(id) {
    return this.transactions[id];
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const key of Object.keys(this.transactions)) {
      if (this.transactions[key].type === type) {
        total += this.transactions[key].amount;
      }
    }
    return `Сума транзакції: ${total}, Тип транзакції: ${type}`;
  },
};

console.log(account.getBalance()); // 0
console.log(account.deposit(1000)); // Ваш поточний баланс на рахунку після депозиту: 1000
console.log(account.withdraw(500)); // Ваш поточний баланс на рахунку після виводу грошей: 500
console.log(account.withdraw(2000)); // Помилка! Недостатньо коштів на рахунку // Ваш поточний баланс на рахунку: 500
console.log(account.withdraw(-2000)); // Помилка! Будь ласка, введіть суму більше 0 // Ваш поточний баланс на рахунку: 500
console.log(account.deposit(-1420)); // Помилка! Будь ласка, введіть суму більше 0 // Ваш поточний баланс на рахунку: 500
console.log(account.getTransactionDetails(1)); // { amount: 1000, type: "deposit" }
console.log(account.getTransactionTotal(Transaction.DEPOSIT)); // Сума транзакції: 1000, Тип транзакції: deposit
console.log(account.getTransactionTotal(Transaction.WITHDRAW)); // Сума транзакції: 500, Тип транзакції: withdraw
console.log(account.getBalance()); // Ваш поточний баланс на рахунку: 500
console.log(account.transactions); // [{ amount: 1000, type: "deposit" }, { amount: 500, type: "withdraw" }]