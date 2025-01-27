/***
 *  OPERATORS
 *   |- Arithmatic operators
 *   |- Binary Operators / Bitwise Operators
 *   |- Logicl Operators
 *   |- Ternary Operator
 *   |- Comma and dot operators , of , in operators
 *   |- Increment and decreament operators
 *   |- Assignment operators =, +=, -=, *=, /=, **=
 *   |- Comparison operator <, > , ==/===, >=, <=, !=, !==
 */

//Arithmatic +, -, /(div), *,(mlti) %(modulous)

let a = 10;
let b = '10';

let add = a + b;
console.log(add) 

let sub = a-b;
console.log(sub)

let div = a/b;
console.log(div)

let mul = a*b;
console.log(mul)

let mod = a%b
console.log(mod)

let c = 20;
let d = "10";

let div1 = a/b;
console.log(div1)

let mod2 = a%b;
console.log(mod2)


// Comparison operators
console.log(a < b)

console.log(a == b)
console.log(a === b)

console.log(c<=d)
console.log(c==d)
console.log(c===d)
console.log(c>=d)


//logical operators
let name = 12;
let name2= '12';
console.log(name == name2 && name >= name2)


let x = 20;
let y = '20';
console.log(x==y || x>=y)
console.log(x===y || x<=y)
 console.log(x===y && x>=y)


let isAdmin = false;
console.log(!isAdmin)

console.log(x != y)
console.log(x !== y)


// Assignment Operators
let name1 = 'ABC';

let num1 = 10;
let num2 = 2;

//let result = num1 + num2;
// console.log(num1 += num2, result)
//console.log(num1 **= num2)
//console.log(num1 -= num2)
//console.log(num1/=num2)
// console.log(num1=num2)
// console.log(num1 **= num2)
console.log(num1/=num2)
//console.log(num1 *=num2)


// bitwise operators 

//console.log(5 & 4)

console.log(13 & 11)

console.log(11 | 13)

console.log(8 & 9)
  
console.log(8 | 9)

console.log(11 & 12)

console.log(11 | 12)


console.log('hello pawan')


// comman and . operators
console.log(num1, num2)

/**Increment / decrement operators
 *           ||
 *    ---------------------------------------------
 *    |                                          |
 *   Post Incre / post dec              pre ince / pre dec
 */ 


let inc = 1;
console.log(inc) // 1
console.log(inc++) // 1
console.log(++inc) //  3
console.log(inc--)// 3
console.log(--inc)  // 1     


// ternary operator
// syntax : condition ? "if true" : "if false";
let age = 90
let result = age >= 18 ? "user is adult" : "user is under age";
console.log(result);

let r2 = age == 18 ? "user gets just adult" : age == 20 ? "user is 2years older than getting adult" : age < 18 ? "user is under age" : "Invalid age";
console.log(r2)

let marks = 50
let results =marks>=90 ? "A+" : marks< 90 && marks >=80 ? "A" : marks<80 && marks>=70 ? "B+": marks<70 && marks >=60 ? "B": "failed";
console.log(results)


//      nesting of ternary operators

let isLoggedIn = true;
let userName = 'abc@123';
let password = "12345";

let r3 = isLoggedIn ?  userName == 'abc@123' ? password == "1234" ? "User is authenticated" : "password is incorrect":"username not matched" : "user is not loggedIn";
console.log(r3);