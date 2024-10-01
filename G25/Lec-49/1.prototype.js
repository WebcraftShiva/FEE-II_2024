// 1.
const person1 = {
  name: "yash",
  age: 25,
  isAdult: true,
};
console.log(person1);

const person2 = Object.create(person1);
const person3 = Object.create(person2);
console.log(person2);
console.log(person3);
console.log(person2.name);
console.log(person2.age);
console.log(person3.age);
console.log(person3.__proto__ == person2);

person2.name = "vivek";
console.log(person3.name);
console.log(person3.__proto__ === person2);
console.log(person2.__proto__ === person1);
console.log(person1.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

console.log(person3.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("name"));
console.log(person3.hasOwnProperty("age"));

const num = 100;
console.log(num.__proto__ == Number.prototype);
console.log(Number.prototype.__proto__ == Object.prototype);

const str = "shiva";
console.log(str.__proto__ == String.prototype);
console.log(String.prototype.__proto__ == Object.prototype);

const arr = [1, 2, 3, 4];
console.log(arr.__proto__ == Array.prototype);
console.log(Array.prototype.__proto__ == Object.prototype);

const func = function () {
  console.log("Function");
};
console.log(func.__proto__ == Function.prototype);
console.log(func.prototype.__proto__ == Object.prototype);
