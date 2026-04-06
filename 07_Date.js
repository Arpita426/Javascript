console.log(Date);

//let's learn about Date
const today = new Date();
// console.log(today);
// console.log(today.toLocaleString());
// console.log(today.toTimeString());
// console.log(today.toISOString());
// console.log(today.toJSON());

let myDate = new Date(2029, 1, 10);  //what is happening 
                                            //interasting fact --> dates are also round on (you know what i'm trying to say)
                                            //if not then try to enter invalid day 
console.log(myDate.toDateString());


let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(myDate.getTime());

let newDate = new Date(mydate);
console.log();
newDate.toLocaleString('default',{
    weekday: "long"
})
