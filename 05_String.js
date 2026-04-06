const name  = "arpita"
const repoCount = 50

//console.log(name + repoCount) //--> Outdated 


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//console.log(name.length);

const gameName = new String("arpitaa")

console.log(gameName[0]);
console.log(gameName.__proto__);

//charAt
//indexOf

const str = new String("arpitav")
const s1 = str.substr(1,4)
console.log(s1);

const s2 = str.slice(3,-8) //i have to understand this what is exactly happening
console.log(s2);

//trim
const str1 = "     Arpita    vekariya "
console.log(str1);
console.log(str1.trim());

//replace 
const url = "https://arpita%20vekariya.com"
console.log(url.replace("%20","-"));

//includes
console.log(url.includes("vekriy"));

//split
console.log(url.split("a"));