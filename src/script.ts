import { demoObj } from "./module.js";

/* 1. -------------------------- Type Basics -------------------------- */

/* #Variable */
let intro = "Riyad";
// intro = 22 -(Can't be decleare another data type)
intro = "Jobayer";

let someone: any; // let someone;
someone = "Someone";
someone = 17;

/* #Array */
const array = ["I", "am", "Riyad"];
// array.push(true) -(Can't be push different data type)
const array1 = ["hello", 143, true];
array1.push("so");
array1.push(3);
// array1.push({name: "someone"}) -(Can't be push different a data type which doesn't exist)
let array2: any[]; // let array;

/* #Object */
const obj = { name: "riyad", age: 22 };
// obj.name = 22 - Can't set different data
// obj.job = "sth" - Can't add extra field

/* #Function */
const myFunc = (a: number, b: string) => {
  return `${b} with ${a}`;
};

// myFunc("no", true) - Can't pass another data type
myFunc(22, "Nabil");

/* 2. -------------------------- Explicit & Union Type -------------------------- */
let a: string | number;
a = "Ten";

let array3: (number | boolean)[] = [];
array3.push(32);

const obj1: { name: string | boolean; age: number } = {
  name: "Riyad",
  age: 23,
};
obj1.name = false;
// obj1.age = "to" - Schema defined, can't be add another data type

/* 3. -------------------------- Dynamic Type -------------------------- */
let c = [];
let array5: any[] = [];
let obj2: { name: any; age: any } = { name: true, age: { a: "b" } };

/* 4. -------------------------- TypeScript on Functions -------------------------- */
const myFunc1: Function = (
  a: number,
  b: number,
  c: string = "Hello TS"
): number => {
  // C?: string
  console.log(c);
  return a + b;
};

myFunc1(1, 2);

/* 5. -------------------------- Alias -------------------------- */
type StringOrNum = string | number;
type userDetail = { name: string; age: number; married: boolean };

const obj3: { id: StringOrNum; user: userDetail } = {
  id: 1234,
  user: { name: "Riyad", age: 22, married: false },
};

const myFunc2 = (user: userDetail): object => {
  return user;
};

/* 6. -------------------------- Function Signature -------------------------- */
let funcPattern1: (a: number, b: number, c: string) => number;

funcPattern1 = (a: number, b: number, type: string) => {
  if (type === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(funcPattern1(2, 5, "add"));

/* 7. -------------------------- TypeScript on Class -------------------------- */
class Player {
  // Define the property type
  name: string;
  age: number;
  category: string;
  constructor(_name: string, _age: number, _category: string) {
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

const players: Player[] = []; // An array which only takes 'Player' like object
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
    public name: string,
    private id: number,
    readonly verified: boolean
  ) {}

  getDetials() {
    return `My name is ${this.name}, id is ${this.id}.`;
  }
}

const riyad = new User("Riyad", 123, true);
console.log(riyad.name);

/* 9. -------------------------- Module System -------------------------- */
// https://www.youtube.com/watch?v=lnup-9bBCUQ&list=PLHiZ4m8vCp9PgOOjdyNpc6AoBmKNrp_u3&index=11
console.log(demoObj.utility);

/* 10. -------------------------- Interfaces -------------------------- */
// - Used for structuring an Object, Class and element of an Array

interface studentInfo {
  name: string;
  roll: number;
  goodStudent: boolean;
}

const refayet: studentInfo = { name: "Refayet", roll: 1, goodStudent: true };

class Student implements studentInfo {
  name: string;
  roll: number;
  goodStudent: boolean;
  constructor(_name: string, _roll: number, _goodStudent: boolean) {
    (this.name = _name), (this.roll = _roll), (this.goodStudent = _goodStudent);
  }
}

let Roni: studentInfo;
Roni = new Student("Roni", 22, false)

const students: studentInfo[] = []
students.push(Roni)
students.push(refayet)
// students.push(riyad) - can't push this object


/* 11. -------------------------- Generics -------------------------- */
const makePerson = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 100)
  return {id, ...obj}
}

const makePerson2 = <T extends {name: string, age: number}>(obj: T) => {
  let id = Math.floor(Math.random() * 100)
  return {id, ...obj}
}

const rakib = makePerson({name: "Riyad", age: 22})
const rakib2 = makePerson2({name: "Riyad", age: 22})
console.log(rakib.age)

/* 12. -------------------------- Enum -------------------------- */
const enum status { success, fail, pending} // 0, 1, 2 

const apiResponse = {
  statusCode: 200,
  data: [],
  status: status.pending // 0, 1, 2 
}

console.log(apiResponse)

/* 13. -------------------------- Tuples -------------------------- */
const ab: [number, string, boolean] = [2, "String", true] // define the data type of each index
// ab.push(35) - not recommended