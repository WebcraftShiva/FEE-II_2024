// Object can be declared in  2 ways: constructor/literals

// A: constructor:

// const obj = new Object()
// obj.name = "Yash";
// console.log(obj)
// console.log(typeof obj)

// B: Literals:

// merging 2 objects:
let obj1 = {name1: "yashveer", age:25}
let obj2 = {name2: "yashveer", age:24}

// let obj3 = {...obj1,...obj2}
// console.log(obj3)
let obj4 = Object.assign(obj1,obj2)
console.log(obj4)

// 4. object inside an array:

// const array=[
//     {
//         name:{
//             name1:"abc",
//             name2:"vcx",
//             name3:"dfeg"
//         },
//         rollno:2242
//     },
//     {
//        name:"tej",
//         id:{
//             rollno:2230,
//             marks:100
//         },
//     },
//     {
//         name:"piju",
//         rollno:2176
//     }
// ]
// console.log(array[0].name.name2);



// 3. Object inside a object:
// const users = {
//     user1:{
//         name: "Yash",
//         age:25
//     },
//     user2:{
//         name: "devdutt",
//         age:26
//     },
//     user3:{
//         name: {
//             name:"abc",
//         },
//         age:23
//     }
// }
// console.log(users.user3.name.name)


// const users = {
//     name: "Kanav",
//     'full name' : 'Kanav Aggarwal',
//     age: 25,
//     Subject: 'FEE',
//     CGPA: 8.6
// }


// 2. changing/updating Object value
// users.name = "Mohit";
// console.log(users)

// 1. Access object value:
// console.log(typeof users)
// console.log(users.name)
// console.log(users['name'])
// console.log(users['full name'])
// console.log(users('full name'))