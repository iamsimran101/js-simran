//Primitive : call by value (copy)
//7types: String, Number , Boolean(true (1) or false (0)) , Null(empty), undefined (variabale and memory space is declared but value not known yet ), Symbol(to make any value unique symbol is used), BigINT

// Non-primitive (Reference type) : reference can be allocated directly to the memory
//Arrays , Objects , Functions

//for symbols we have eg :-

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); //in terminal, it will show false because even if the string values are same . symbol will declare they both (returened value ) are unique/ not same 
 
const bigNumber = 373868383273827n
 console.log(typeof bigNumber);

 /*return type of 
 undefined = undefined 
 null = object 
 string = string 
 Number = Number
 Boolean = Boolean 
 function = function , but actually it will return objectfunction */
