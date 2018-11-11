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






































// the end
