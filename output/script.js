import { demoObj } from "./module.js";
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
/* 4. -------------------------- TypeScript on Functions -------------------------- */
const myFunc1 = (a, b, c = "Hello TS") => {
    // C?: string
    console.log(c);
    return a + b;
};
myFunc1(1, 2);
const obj3 = {
    id: 1234,
    user: { name: "Riyad", age: 22, married: false },
};
const myFunc2 = (user) => {
    return user;
};
/* 6. -------------------------- Function Signature -------------------------- */
let funcPattern1;
funcPattern1 = (a, b, type) => {
    if (type === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(funcPattern1(2, 5, "add"));
/* 7. -------------------------- TypeScript on Class -------------------------- */
class Player {
    constructor(_name, _age, _category) {
        this.name = _name;
        this.age = _age;
        this.category = _category;
    }
    play() {
        return `${this.name} at his ${this.age} play as a ${this.category}`;
    }
}
const sakib = new Player("Sakib", 32, "All-rounder");
const mashrafee = new Player("Mashrafee", 40, "Bowler");
const mushi = { name: "Mushi", age: 23, category: "Wicket Keeper" };
const players = []; // An array which only takes 'Player' like object
players.push(sakib);
// players.push(mushi) - not accepted
mashrafee.age = 33; // Can be access which is risky [use access modifier]
/* 8. -------------------------- Access Modifier -------------------------- */
class User {
    /* Access Modifier___________
      private name: string;
      public id: number;
      readonly verified: boolean;
    */
    constructor(
    // Shortcut way to delcear this (observe: it's in the contructor parameter)
    name, id, verified) {
        this.name = name;
        this.id = id;
        this.verified = verified;
    }
    getDetials() {
        return `My name is ${this.name}, id is ${this.id}.`;
    }
}
const riyad = new User("Riyad", 123, true);
console.log(riyad.name);
/* 9. -------------------------- Module System -------------------------- */
// https://www.youtube.com/watch?v=lnup-9bBCUQ&list=PLHiZ4m8vCp9PgOOjdyNpc6AoBmKNrp_u3&index=11
console.log(demoObj.utility);
const refayet = { name: "Refayet", roll: 1, goodStudent: true };
class Student {
    constructor(_name, _roll, _goodStudent) {
        (this.name = _name), (this.roll = _roll), (this.goodStudent = _goodStudent);
    }
}
let Roni;
Roni = new Student("Roni", 22, false);
const students = [];
students.push(Roni);
students.push(refayet);
// students.push(riyad) - can't push this object
/* 11. -------------------------- Generics -------------------------- */
const makePerson = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign({ id }, obj);
};
const makePerson2 = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign({ id }, obj);
};
const rakib = makePerson({ name: "Riyad", age: 22 });
const rakib2 = makePerson2({ name: "Riyad", age: 22 });
console.log(rakib.age);
const apiResponse = {
    statusCode: 200,
    data: [],
    status: 2 /* status.pending */ // 0, 1, 2 
};
console.log(apiResponse);
/* 13. -------------------------- Tuples -------------------------- */
const ab = [2, "String", true]; // define the data type of each index
// ab.push(35) - not recommended
