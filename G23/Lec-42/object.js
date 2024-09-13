// There are 2 ways to declare an object: constructor/literals:

// A) construtor:
// const obj = new Object();
// obj.name = 'YASH'
// console.log(typeof obj)
// console.log(obj)

// B) literals:

// 5.merge object:
obj1 = {name1: 'kanav', age:24}
obj2 = {name2: 'yash', age:25}
// obj3 = {...obj1,...obj2}
// console.log(obj3);
obj4 = Object.assign(obj1,obj2);
console.log(obj4)


// 4: object inside an array:
// let arr = [
//     {
//         name:'shivam'
//     },
//     {
//         name:'yash',
//         'roll number': 12343
//     },
//     {
//         name:'kanav',
//         'roll number': 123
//     }
// ]
// console.log(arr[2].name)

// 3.object inside an object:

// let users = {
//     user1 :{
//         name: 'abc',
//         age: {
//             user2 :{
//                 name: 'cde',
//                 age: 24
//             }
//         }
//     }
// }
// console.log(users.user1.age.user2.age)


// let users ={
//     user1 :{
//         name: 'Devdutt',
//         age: 24
//     },
//     user2 :{
//         name: 'yash',
//         age: 24
//     }
// }
// console.log(users.user2.age)


// const users = {
//     name: 'Yash singh',
//     'roll number': 11603406,
//     subject : 'FEE'
// }

// //2.change object value
// users.name = "somaya singh";
// console.log(users)

// 1. Accessing object value:
// console.log(users.name)
// console.log(users['name'])
// // console.log(users('roll number'))
// console.log(users['roll number'])

