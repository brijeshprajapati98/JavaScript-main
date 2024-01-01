const name = "brijesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('GTAVice')

// console.log(gameName[0]);
// console.log(gameName._proto_);console.log();
// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('T'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   brijesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://brijesh.com/brijesh%20prajapati"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

