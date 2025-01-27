let name = "Sagar"; 

var b = 20;
console.log(name)

{
    let name = "Sagar";
    console.log(name)
}


{
    let name = "pawan";
    console.log(name)
}


const gender= "male";
console.log(gender); 
let age; // declaration of variables
age = 20; // value assignment
console.log(age)


/*** Scope of variables
 * \
 * Block
 * Functional
 * Global
 */

// |Global

var a = 10;
let d = 20;
const c = 30;

{
    console.log(c)

    // Block scope
    var name1 = 'Rahul';
    console.log(name1)
}
console.log(c)
console.log(name1)

function add() {
    console.log(c)
    var roll = 20;
    console.log(roll)
}

add()

// console.log(roll)
