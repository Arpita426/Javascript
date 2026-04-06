//two types of datatypes

//1. primitive datatype
//String Number Boolean null undefined BigInt
const score = 100

const id = Symbol("123")
const id2 = Symbol("123")

console.log(id === id2);

const bigNum = 1333333333333333333333333333333333333333n;
console.log(bigNum);



//2. reference datatype(Non-primitive datatype)
//Array Object Function

const heros = ["thor", "ironman", "spiderman"]
let myObj = {
    name: "arpita",
    age: 22
}

console.log(heros);
console.log(myObj);

const myFun = function(){
    console.log("Hello World")
}

console.log(typeof myFun);
console.log(typeof bigNum);
console.log(typeof heros);


//--------------------------------------------------

//Stack Memory (Primitive Datatype)
//Heap Memory (Non-Primitive Datatype)

let myName = "arpita"
let anotherName = myName
myName = "arpit"
console.log(myName);
console.log(anotherName);

const obj = {
    name: "arpita",
    age: 22
}
const obj2 = obj
obj.name = "arpit"
console.log(obj);
console.log(obj2);



