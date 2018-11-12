/****************************************
* Variable and Data Types
*/

//eslint no-console:


/*
var firstName = 'CPU';
console.log(firstName);

var lastName = "Syntax";
var age = 50;
console.log(lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var _if = 23;
*/


/****************************************
* Variable mutation and type coercion
*/

var firstName = 'CPU';
var age = 550;

console.log("Hello");

console.log("Hello World");

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log("Test 1, 2, 3...")

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

age = 'twenty-eight';
job = 'driver';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
//
// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

// Creating Date Object
// displays date and time
// new Date().toLocaleString() // displays date and time
// new Date().toLocaleDateString() // displays date
// new Date().toLocaleTimeString() // displays time
var A = new Date().toLocaleDateString()
// var A = new Date();

// day of the week from above object
// is being extracted using getDay().
// var B = A.getDay()

// Printing day of the week.
console.log(A);

var now, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;

console.log(johnOlder);
console.log('HI');
console.log('HI');
console.log('HI');

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);


/****************************************
* Operator precedence 
*/



console.log('##########################');
console.log('#    start lecture 12    #');
console.log('##########################');
/****************************************
* Coding Challege Lecture 12 
*/

// mark mass in kg 58
// mark height in meter 160

// John mass in kg 80
// John height in meter 140


var markMass = 78;
var markHeight = 1.69;
var markBMI = markMass/ markHeight**2;
console.log('Mark\'s BMI: ' + markBMI);


var JohnMass = 92;
var JohnHeight = 1.95;
var JohnBMI = JohnMass/ JohnHeight**2;
console.log('John\'s BMI: ' + JohnBMI);

var compareBMI = markBMI > JohnBMI;
console.log('Is Mark\'s BMI higher than John\'s? ' + compareBMI);



console.log('##########################');
console.log('#    start lecture 14    #');
console.log('##########################');
/****************************************
* If else Lecture 14 
*/

var isEdithHorny = true;
if(isEdithHorny) {
    console.log('EDITH is SUPER HORNY AND WET!!')
    console.log('Grab her pussy and make her CUM');
} else {
    console('Try a lil harder');
}



console.log('##########################');
console.log('#    start lecture 15    #');
console.log('##########################');
/********************************
* Boolean Logic Lecture 15 
*/


var age = 20;
if(age < 13) {
    console.log('He is a boy');
} else if (age > 12 && age < 19) {
    console.log("He is a teenager");
} else {
    console.log("He is a man");
}


console.log('####################');
console.log('#    Lecture 16    #');
console.log('####################');
/***********************************************
*  The Ternary Operator and Switch Statement 
*/

var firstName = 'John';
var age = 50;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log('drinks juice');

// Ternary operator
// test ? true : false
var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

// Switch statement
 var job = 'teacher';
 switch(job) {
     case 'teacher':
     console.log(firstName +' teaches people to code.');
     break;
     case 'driver':
     console.log(firstName +' drives an uber around Miami');
     break;
     case 'designer':
     console.log(firstName +' designs beautiful websites.');
     break;
     default:
     console.log(firstName +' doesn\'t do anything.');
 }

console.log('####################');
console.log('#    Lecture 17    #');
console.log('####################');
/**************************************************
* Truthy and Falsy Values and Equality Operators 
*/

// Falsy values: undefined, null, 0, '', NaN
// truthy values: NOT Falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
// === strict
// == coercion

if (height == '23') {
    console.log('The = operator does type coercion!');
}


console.log('####################');
console.log('#    Lecture 18    #');
console.log('####################');
console.log();
/**************************************************
* Coding Challenge 2
*/

var johnGame1 = 0;
var johnGame2 = 0;
var johnGame3 = 33;


var mikeGame1 = 0;
var mikeGame2 = 0;
var mikeGame3 = 33;

var maryGame1 = 0;
var maryGame2 = 0;
var maryGame3 = 3;

var johnAvg = (johnGame1 + johnGame2 + johnGame3) / 3;
var mikeAvg = (mikeGame1 + mikeGame2 + mikeGame3) / 3;
var maryAvg = (maryGame1 + maryGame2 + maryGame3) / 3;

console.log('John\'s Team averaged: ' + johnAvg);
console.log('Mike\'s Team averaged: ' + mikeAvg);
console.log('Mary\'s Team averaged: ' + maryAvg);

var winner = 'default';
if(johnAvg === mikeAvg && johnAvg === maryAvg) {
    winner = 'Draw';
} else if(mikeAvg === maryAvg && johnAvg < mikeAvg) {
    console.log('Mike and Mary are tied for first');
    winner = 'Mike and Mary';
} else if(mikeAvg === johnAvg && maryAvg < mikeAvg) {
    console.log('Mike and John are tied for first'); 
    winner = 'Mike and John';
} else if(johnAvg === maryAvg && mikeAvg < johnAvg) {
    console.log('Mary and John are tied for first'); 
    winner = 'Mary and John';
} else if(johnAvg > mikeAvg && johnAvg > maryAvg) {
    winner = 'John';
} else if(johnAvg < mikeAvg && mikeAvg > maryAvg) {
    winner = 'Mike';
} else if(maryAvg > mikeAvg && johnAvg < maryAvg) {
    winner = 'Mary';
}

// johnAvg > mikeAvg ? round1 = 'John' : round1 = 'Mike';
// round1 > maryAvg ? winner = round1 : winner = 'Mary';

console.log('The winner is: ' + winner);





























// the end
