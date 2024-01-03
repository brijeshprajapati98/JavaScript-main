// singleton

// object literals
// Object.create // constrater

const mySym = Symbol("Key1")


const JsUser = {
    name: "Brijesh",
    "full name": "Brijesh Prajapati",
    [mySym]: "mykey1",
    Age: 18,
    location: "Jaipur",
    email: "brijesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email = "brijesh@chargpt.com"
// Object.freeze(JsUser)
JsUser.email = "brijesh@bard.com"
// console.log(JsUser);

JsUser.greeting = function(){
     console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
     console.log(`"Hello Js User, ${this.name}"`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());