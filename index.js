//Assignment 1
const user = {
    mood: "happy", 
    hobby: "skydiving", 
    premium: "false", 
};
const keys = Object.keys(user);

for (const keys in user) {
    console.log("Key: ", keys);
}

function countProps(obj) {
    let counter = Object.entries(obj).length;
    console.log(counter);   
}

countProps(user);

//assignment 3

const employees = {
    mark: 35, 
    jane: 20, 
    tyler: 17, 
    layla: 44
};


function findBestEmployee(employees) {
  let bestEmployeeName = Object.keys(employees)[0]; 
  let tasks = employees[bestEmployeeName]; 

  for (const name in employees) {
    if (employees[name] > tasks) {
      tasks = employees[name]; 
      bestEmployeeName = name; 
    }
  }
   console.log(bestEmployeeName);
}

findBestEmployee(employees);

//assignment 4

const employeesSal = {
  mark: 25,
  jane: 30,
  tyler: 19,
  layla: 20,
};

function countTotalSalary(employees) {
    let totalSal = 0; 
    let salaries = Object.values(employees);
    for (const salary of salaries) {
        totalSal += salary;
    }
    console.log(totalSal);
}

countTotalSalary(employeesSal);

//assignment 5

const propInfo = [
  { prop: "lights", amount: 10, types: 3 },
  { prop: "costumes", amount: 20, types: 13 },
  { prop: "book", amount: 5, types: 5 },
  { prop: "tree", amount: 12, types: 2 },
];

function getAllPropValues(arr, prop) {
    let propList = []; 
    for (let index in arr) {
        let info = arr[index];
        propList.push(info.prop)
    }
    console.log(propList);
}

getAllPropValues(propInfo);

//assignment 6

const allProducts = [
  { name: "Pen", amount: 10, price: 3 },
  { name: "Books", amount: 20, price: 13 },
  { name: "Paper", amount: 5, price: 5 },
  { name: "Pencil", amount: 12, price: 2 },
];

function calculateTotalPrice(allProducts, productName) {
    for (let index in allProducts) {
        let product = allProducts[index];
        let name = product.name; 
        let worth = product.amount * product.price; 
        console.log(name, ": $", worth);
        
    }
}

calculateTotalPrice(allProducts);

//assignment 7 
const account = {
    name: "Jess", 
    balance: 5678.44, 

    
};
