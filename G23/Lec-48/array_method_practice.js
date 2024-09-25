/*
Question 1: 
Create a function that with a name EmployData which has a work to take data as a paramater. 
Emplyee data - Id, Name, Designation:
*/
// Ans:
var employData = function (id, name, designation) {
  var employee = {};

  employee.id = id;
  employee.name = name;
  employee.designation = designation;

  return employee;
};
console.log(employData(1, "kanav", "Web designer"));

/*
Question 2: 
Create a array with a name cart with products (name,price, qty).
Calculate the price of the all the product that we have added in the cart.

var cart = [{ id: 1, name: 'iphone 16', price: 164000, qty : 1},
		{ id: 2, name: 'iphone 15', price: 84000, qty : 2},

}]
*/
// Ans:
var cart = [
  { id: 1, name: "iphone 16", price: 164000, qty: 1 },
  { id: 2, name: "iphone 15", price: 84000, qty: 2 },
];

const totalPrice = cart.reduce(function (sum, item) {
  return sum + item.price * item.qty;
}, 0);
console.log(totalPrice);

/*
Question 3: 
Write a function to filter out all the perfect square from given list
of number:
Example: [1,2,3,4,5,6,7,8,9,10,11,16,18,20,36,40,49];
Ans: [1,4,9,16,36,49]
*/
// Ans:
function isPerfectSquare(num) {
  return Number.isInteger(Math.sqrt(num));
}

function filterPerfectSquares(arr) {
  return arr.filter(isPerfectSquare);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 18, 20, 36, 40, 49];
const perfectSquares = filterPerfectSquares(numbers);

console.log(perfectSquares);

/*
Question 4:
There is a array with user names.
Create a object(id,name,rewards) inside an array.
 user = ['Amit', 'Ajay','Mukesh'];

Rewards = 1-10 Rs (random);
output:
listofUser = [
 {id:1, name: 'Amit', reward:7 etc},
{id:2, name: 'Ajay', reward:5 etc},
{id:3, name: Deepak',reward:5 etc},
]
*/
// Ans:
const users = ["Amit", "Ajay", "Mukesh"];

function getUserWithRandomRewards(users) {
  return users.map(function (user, idx) {
    return {
      id: idx + 1,
      name: user,
      rewards: Math.floor(Math.random() * 10 + 1),
    };
  });
}

const userList = getUserWithRandomRewards(users);
console.log(users);
console.log(userList);

/* Question 5:
Find the veg menu list from the given menu

const menu = [
        "Kadai Paneer","Dal Makhni","Masala Dosa","Chicken Soup","Chicken Butter Masala","Veg Chowmein",
        "Egg Curry", "Egg Maggie","Chicken Fry","Chicken Biryani","Khichdi","Handi Paneer","Onion Paratha",
        "Garlic Naan","Onion Pizza","Garlic Bread","Onion Rings","Chilli Paneer",
       ];
*/

// Ans:
const menu = [
  "Kadai Paneer",
  "Dal Makhni",
  "Masala Dosa",
  "Chicken Soup",
  "Chicken Butter Masala",
  "Veg Chowmein",
  "Egg Curry",
  "Egg Maggie",
  "Chicken Fry",
  "Chicken Biryani",
  "Khichdi",
  "Handi Paneer",
  "Onion Paratha",
  "Garlic Naan",
  "Onion Pizza",
  "Garlic Bread",
  "Onion Rings",
  "Chilli Paneer",
];

function isVeg(food) {
  if (
    food.toLowerCase().includes("chicken") ||
    food.toLowerCase().includes("egg")
  ) {
    return false;
  }
  return true;
}
const vegMenu = menu.filter(isVeg);
console.log(vegMenu);
