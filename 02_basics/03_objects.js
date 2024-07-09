//destructuring objects in js 

const user = {
           username : "ateez",
           totalmem : 8,
           price : "priceless",
           company : "KQ"
}

//to destruct any keys 

const {username : atiny } = user   // here we are destructing the key username with atiny 
console.log(atiny);

//json

{
    "name": "ateez",
    "company": "kq",
    "price": "priceless"
    
    }