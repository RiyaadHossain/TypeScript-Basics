"use strict";
/* 1. -------------------------- Type Basics -------------------------- */
/* #Variable */
let intro = "Riyad";
// intro = 22 -(Can't be decleare another data type)
intro = "Jobayer";
let someone; // let someone;
someone = "Someone";
someone = 17;
/* #Array */
const array = ["I", "am", "Riyad"];
// array.push(true) -(Can't be push different data type)
const array1 = ["hello", 143, true];
array1.push("so");
array1.push(3);
// array1.push({name: "someone"}) -(Can't be push different a data type which doesn't exist)
let array2; // let array;
/* #Object */
const obj = { name: "riyad", age: 22 };
// obj.name = 22 - Can't set different data
// obj.job = "sth" - Can't add extra field
/* #Function */
const myFunc = (a, b) => {
    return `${b} with ${a}`;
};
// myFunc("no", true) - Can't pass another data type
myFunc(22, "Nabil");
/* 2. -------------------------- Explicit & Union Type -------------------------- */
let a;
a = "Ten";
let array3 = [];
array3.push(32);
const obj1 = {
    name: "Riyad",
    age: 23,
};
obj1.name = false;
// obj1.age = "to" - Schema defined, can't be add another data type
/* 3. -------------------------- Dynamic Type -------------------------- */
let c = [];
let array5 = [];
let obj2 = { name: true, age: { a: "b" } };
/* 3. -------------------------- TypeScript on Functions -------------------------- */
const myFunc1 = (a, b, c = "Hello TS") => {
    console.log(c);
    return a + b;
};
myFunc1(1, 2);
