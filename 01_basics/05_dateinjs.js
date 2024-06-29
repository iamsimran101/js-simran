let mydate = new Date()
console.log(mydate.toDateString());
//different methods to execute date in js  
/*
console.log(mydate);
 console.log(mydate.toDateString());
console.log(mydate.toString());
console.log(mydate.toJSON()); 
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString()); 

*/

let mydates = new Date("2024-01-31")  //YY-DD-MM
//console.log(mydates.toLocaleString());

let mydatess = Date.now()
//console.log(mydatess);
//console.log(mydates.getTime());

console.log(Date.now()/1000);  //convert date object into secs but output will provide decimal value inorder to remove decimal we can do 

console.log(Math.floor(Date.now()/1000));  //the Math.floor(...) will only execute the value inside the decimal which will prevent the decimal to be executed 

//for string interpolation we have example 
//let mydate = new Date()
//console.log(mydate.toDateString());
console.log(` Right now it is ${mydate.toDateString()}`); //basically here string ma lekhna lai hamle "mydaye" bhani variable declare garera " . " paxi method lagakoxam ani tyoii string ma dollar bhitra rakhera execute garekole tya full-length string dinxa with value  

console.log(mydate.toLocaleString('default',{
    weekday : "long"
}))


