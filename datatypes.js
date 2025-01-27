/**Data types
 *     |
 * -----------------------
 * |                      |
 * Primitive           Non Primitive
 * |- Number             |- Array
 * |- String             |- Objects
 * |-Boolean             |- User Defined Objects
 * |-NaN
 * |- NULL
 * |- undefined
 * |- Symbol
 * 
 */

// Number 
//except numbers it will show error
let num1 = 10;
let num2 = 10.444444;
let num3 = 5e10;
let nu4 = -123456;

console.log(typeof num3)
console.log(typeof num2)
console.log(typeof nu4)


// string
let name = '124 @ rudra i am himanshu';
let name2 = "AAAAAAAAAAAAAAAAAAA";

console.log(name, typeof name)

// Boolean - true/false
let isAdmin = true;
console.log(isAdmin, typeof isAdmin)

//conditions in Boolean
let number1 = 123 // true
let number2 = 0; // false
let number3 = -1234 // true

let result = number2 ? true : false;
console.log(result)

let number4 = 'abc';
console.log
//without values it will show undefined instead of error
let a;
console.log(a)

console.log(number4*10)
console.log(0/0)
console.log(0/10)
console.log(-10/0)

const number5 = null;
if(number5 === null) {
    console.error( number5)
}


let sym = Symbol(123);
let sym1 = Symbol(123)

console.log(sym, typeof sym, sym1)