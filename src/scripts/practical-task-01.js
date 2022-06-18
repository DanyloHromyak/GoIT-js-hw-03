//Завдання 1
const user = {};
user.userName = "Danylo";
user.age = 15;
user.showUserName = function () {
  console.log(this.userName);
};
user.updateAge = function () {
  this.age++;
  console.log(this.age);
};

user.showUserName();
user.updateAge();

//Завдання 2
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (const salary of Object.values(salaries)) {
  sum += salary;
}

console.log(sum);

//Завдання 3
const calculator = {
  read(a, b) {
    a = +prompt();
    b = +prompt();
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log("Сума: " + calculator.sum());
console.log("Добуток: " + calculator.mul());

// Завдання 4
const cafe = {
  name: "Republic",
  width: 200,
  height: 300,
  personal: 5,
  hr: true,
};

for (const entry of Object.entries(cafe)) {
  const key = entry[0];
  const value = entry[1];
  console.log(`${key}: ${value}`);
}

cafe.square = function () {
  return this.width * this.height;
};

console.log(`Площа будівлі: ${cafe.square()}`);
