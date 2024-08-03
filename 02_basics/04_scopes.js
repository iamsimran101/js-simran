let a = 88    // global scope 

if(true)
{
    let a = 8 
    const b = 10        // block scope 
    var c = 20 
    console.log("inside",b);
    
}


console.log(a);

