//Assignment 1
const user = {
  mood: "happy",
  hobby: "skydiving",
  premium: "false",
};
const { mood, hobby, premium } = user;

console.log(user);

// const keys = Object.keys(user);

// for (const keys in user) {
//     console.log("Key: ", keys);
// }

// function countProps(obj) {
//     let counter = Object.entries(obj).length;
//     console.log(counter);
// }

// countProps(user);

//assignment 3

const employees = {
  mark: 35,
  jane: 20,
  tyler: 17,
  layla: 44,
};

const { mark, jane, tyler, layla } = employees;

console.log(employees);

// function findBestEmployee(employees) {
//   let bestEmployeeName = Object.keys(employees)[0];
//   let tasks = employees[bestEmployeeName];

//   for (const name in employees) {
//     if (employees[name] > tasks) {
//       tasks = employees[name];
//       bestEmployeeName = name;
//     }
//   }
//    console.log(bestEmployeeName);
// }

// findBestEmployee(employees);

//assignment 4

const employeesSal = {
  james: 25,
  janie: 30,
  tyrel: 19,
  lay: 20,
};

const { james, janie, tyrel, lay } = employeesSal;

console.log(employeesSal);

// function countTotalSalary(employees) {
//     let totalSal = 0;
//     let salaries = Object.values(employees);
//     for (const salary of salaries) {
//         totalSal += salary;
//     }
//     console.log(totalSal);
// }

// countTotalSalary(employeesSal);

//assignment 5

const propInfo = [
  { prop: "lights", amount: 10, types: 3 },
  { prop: "costumes", amount: 20, types: 13 },
  { prop: "book", amount: 5, types: 5 },
  { prop: "tree", amount: 12, types: 2 },
];
const [
  { prop: prop1, amount: amount1, types: types1 },
  { prop: prop2, amount: amount2, types: types2 },
  { prop: prop3, amount: amount3, types: types3 },
  { prop: prop4, amount: amount4, types: types4 },
] = propInfo;

console.log(
  `Prop1: ${prop1}, Amount1: ${amount1}, Types1: ${types1},\n` +
    `Prop2: ${prop2}, Amount2: ${amount2}, Types2: ${types2},\n` +
    `Prop3: ${prop3}, Amount3: ${amount3}, Types3: ${types3},\n` +
    `Prop4: ${prop4}, Amount4: ${amount4}, Types4: ${types4}`
);

// function getAllPropValues(arr, prop) {
//     let propList = [];
//     for (let index in arr) {
//         let info = arr[index];
//         propList.push(info.prop)
//     }
//     console.log(propList);
// }

// getAllPropValues(propInfo);

//assignment 6

const allProducts = [
  { name: "Pen", amount: 10, price: 3 },
  { name: "Books", amount: 20, price: 13 },
  { name: "Paper", amount: 5, price: 5 },
  { name: "Pencil", amount: 12, price: 2 },
];
const [
  { name: name1, amount: am1, price: price1 },
  { name: name2, amount: am2, price: price2 },
  { name: name3, amount: am3, price: price3 },
  { name: name4, amount: am4, price: price4 },
] = allProducts;

console.log(
  `Name1: ${name1}, Amount1: ${am1}, Price1: ${price1},\n` +
    `Name2: ${name2}, Amount2: ${am2}, Price2: ${price2},\n` +
    `Name3: ${name3}, Amount3: ${am3}, Price3: ${price3},\n` +
    `Name4: ${name4}, Amount4: ${am4}, Price4: ${price4}`
);

// function calculateTotalPrice(allProducts, productName) {
//     for (let index in allProducts) {
//         let product = allProducts[index];
//         let name = product.name;
//         let worth = product.amount * product.price;
//         console.log(name, ": $", worth);

//     }
// }

// calculateTotalPrice(allProducts);

//assignment 7
const account = {
  name: "Jess",
  balance: 5678.44,
  transactions: [],

  withdraw(amount) {
    this.transactions.push(`$${-amount}`);
    this.balance -= amount;
  },
  depisit(amount) {
    this.transactions.push(`$${amount}`);
    this.balance += amount;
  },
};

const {name, balance, transactions = [transaction1, ...rest]} = account; 

account.depisit(20); 
account.withdraw(100); 

console.log(account);


