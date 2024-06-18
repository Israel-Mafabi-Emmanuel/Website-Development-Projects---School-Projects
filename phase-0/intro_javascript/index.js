/*
    GLORY BE TO GOD,
    Introduction to Javascript,
    By Israel Mafabi Emmanuel
*/

let l_oper = 90;
let r_oper = 10;

// let dividend   = l_oper / r_oper;
// let product    = l_oper * r_oper;
// let summation  = l_oper + r_oper;
// let difference = l_oper - r_oper;
// 
// console.log(" Dividend  : " + dividend);
// console.log(" Product   : " + product);
// console.log(" Summation : " + summation);
// console.log(" Difference: " + difference);

// typeof operator


let f_name = "Emmanuel";
let l_name = "Mafabi";


console.log(" First Name: " + f_name);
console.log(" Last Name : " + l_name);

console.log(` Full Name : ${r_oper + l_oper} ` + f_name + " " + l_name);

let symbol_1 = Symbol("Emmanuel");
let symbol_2 = Symbol("Mafabi");

let person = {
    symbol_1,
    symbol_2
};

console.log(` Symbol Comparison Result: ${Boolean(symbol_1 === symbol_2)}`);
console.log(person.symbol_1, person.symbol_2);
// using = for assignment
// using == for normal comparison  -> for value only, brings about type conversion
// using === for strict comparison -> for both value and type