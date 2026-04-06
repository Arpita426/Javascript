const score = 100
const score2 = new Number(200)

console.log(score);
console.log(score2);

//tostring 
console.log(typeof score.toString());

//to fixed
console.log(score.toFixed(1));

//precision
const otherNum = 123.5567
console.log(otherNum.toPrecision(3));

//add , between values
const num = 2345678456
console.log(num.toLocaleString());
console.log(num.toLocaleString('en-IN'));

//__________________MATHS__________________


console.log(Math)

//random 
console.log(typeof Math.random().toFixed(2));

console.log(typeof Math.random()*10 + 1);

//if you given a range 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
