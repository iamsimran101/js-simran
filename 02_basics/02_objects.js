// to assign different values or elements from 2,3 or 4 different variables then eg is as follow :-

const var1 = { 1:"ateez" , 2:"simran"}
const var2 = { 3:"sambhavna", 4:"avinash"}
const var3 = {5:"sezal", 6:"suhyal"}

//to assign all of it's value together without any problems we use the method ( assign )

//const var8 = Object.assign({}, var1, var2, var3) one way to merge objects together 
//console.log(var8);

// but the best way to assign or merge them other than the method assign is Spread i.e:- {...variable1,...variable2} eg:-
const var8 = {...var1, ...var2, ...var3}  // the dots are the spread method in js to merge values simply
console.log(var8);

