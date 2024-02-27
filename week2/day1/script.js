console.log("hello world");
/*commenting out lines of code
commenting in js files is with the // and also command + / will multiple lines*/
// commenting multiple lines works with the /* -------- */

//***********************String Variables ****************/
//const let and var
let country = "Germany's winters are cold";
// declaring a variable that is undefined
let dog;
// assigning a value to a variable
dog = "Ragnar";
const TA = "Eric";
dog = "Melli";
console.log(country);
const student = "Alex";
var badIdea = "Do not use";
console.log("my dog", dog);

//**********string methods***************/
const studentNameLength = student.length;
console.log("Alex's length is ", studentNameLength);
const doesItHave = student.indexOf("z");
console.log("does it have a letter", doesItHave);
//all uppercase letters method
const yellingEric = "eric".toUpperCase();
console.log("eric yelling", yellingEric);
//all lowercase  letters method
const whisperingEric = yellingEric.toLowerCase();
console.log("eric whispering", whisperingEric);
const str = "blah blah blah ....";
//.slice does not mutate the original and returns a section of string
console.log(str.slice(-4));

// take a name and uppercase the first and then concatenate the rest of the name
let bestDog = "melli";
let capitalizedName = bestDog[0].toUpperCase() + bestDog.slice(1);
console.log("capital", capitalizedName, bestDog);
//********Primitive data types are immutable***********
dog = "Melli";
console.log("immutable dog variable" + " " + dog);

//***********back ticks *************/
//********template literals ***************/
const ourCoolNewVariable = `Ragnar is heavier than ${dog}`;
console.log(ourCoolNewVariable);

//*******************numbers **************/
let ragnarsAge = 3;
let JoshuasAge = 103;
//this is the modulo operator %
//this will return the remainder of division operation
// console.log(JoshuasAge % 2);
//shorthand for +=, -=, /=, *=
JoshuasAge -= 73;
console.log("my age", JoshuasAge);

//difference between = & == & ===
// one equals assigns a value
//two equals checks if the values are the same
//three equals checks the value but also the type
console.log(3 === "3");

//************Math Object********/
let num = 12.9999999999988948948;
//Math.round rounds as you would expect
// const roundedNum = Math.round(num);
//Math.floor always rounds down
// const roundedNum = Math.floor(num);
//Math.ceil always rounds up
// const roundedNum = Math.ceil(num);
// console.log("our rounded number", roundedNum);

//**********min & max*******************/
let minimum = Math.min(3, 7, 19, 1);
// console.log("the min ", minimum);
let max = Math.max(100, 330, 1000, 600);
// console.log("the max ", max);

let student1 = "Laura";
//********Math.random() *************/
//gives us a random number between 0-1 including zero but never one
const randomNumber = Math.random();
// console.log("our random number", randomNumber);
//*********random letter for the student1 variable ********/
let randomIndex = Math.floor(Math.random() * student1.length);
// console.log("our randomIndex", randomIndex);
// console.log("our random letter", student1[randomIndex]);

//*************Math.pow *************/
const raisedNum = Math.pow(3, 2);
// console.log(raisedNum);

//*********************Booleans ************/
let ericLovesBananas = true;
let ericHasADog = false;
if (ericLovesBananas || ericHasADog) {
  console.log("nom nom nom", "I love Melli");
}
if (ericHasADog && ericLovesBananas) {
  console.log("inside the and and operator");
}

//*************Not operator  ************/
// basically just the !
// console.log(ericLovesBananas);
// console.log(!ericLovesBananas);

//*******create multiple variables  **********/
let num1, num2, num3;
