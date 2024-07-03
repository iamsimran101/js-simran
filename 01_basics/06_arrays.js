//array

const myArry = [0,1,2,3,4]
console.log(myArry[1]);

const myarray = ["ateez","simran"]
console.log(myarray[0]);

// array with methods 

const myname = [0,1,2,3,4,5]   //original value 
console.log(myname);

//slice 
const new1 = myname.slice(1,3)
console.log(new1);
console.log(myname);   // naya variable sanga link garda pani yo slice ma myname print garda original value chnge hudaina 

//splice
const new2 = myname.splice(1,3)
console.log(new2);  // outputs 1,2,3 
console.log(myname); // outputs / prints 0,4,5 