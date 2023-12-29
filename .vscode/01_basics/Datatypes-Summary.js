// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BugInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof id);

const bignumber = 3456543576654356754n;


// Reference (Non primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "brijesh",
    age: 22,
}


const myFuction = function(){
    console.log("Hello world");
}

console.log(typeof bignumber);