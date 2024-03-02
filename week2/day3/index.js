// console.log("hello Ironhackers");
// //*************if/else if Statement*********/
let dog = "Ragnar";
const Ta = "Ericphina";

// //check the lengths and log which one is longer
// //if statement syntax
// // if(a condition){
dog = "Melli";
// // }else if(another condition){

// // }else{

// // }
// if (dog.length > Ta.length && dog.length > 10) {
//   console.log("The dog has a longer name and is more than ten characters");
// } else if (dog.length > Ta.length && dog.length < 10) {
//   console.log("The dog has a longer name and is less than ten characters");
// } else if (dog.length < Ta.length && Ta.length > 10) {
//   console.log("The ta has a longer name and is more than ten characters");
// } else if (dog.length < Ta.length && Ta.length < 10) {
//   console.log("The ta has a longer name and is less than ten characters");
// }

// //********************* Switch statements ************/
// const ourHouse = "Ravenclaw";

// switch (ourHouse) {
//   case "Hufflepuff":
//   case "Ravenclaw":
//     console.log("These are the nicest houses");
//     break;
//   case "Gryffindor":
//     console.log("The brave house");
//     break;
//   case "Slytherin":
//     console.log("The ambitious house");
//     break;
//   default:
//     console.log("You have no house");
// }

//*************for loop ****************/
//the for loop is expecting three things
//first one is make variable and tell it where to start
//second is when the loop should stop
//last is how to increment by on each iteration
//note: separate each parameter by a semicolon NOT A COMMA
//a for loop counting from 0 - 100
for (let i = 0; i <= 10; i++) {
  //   console.log("i ", i);
}
//for loop counting down from 10 - 1

//challenge on every even number 'even and the number'
//on every odd number 'odd and the number'
// for (let i = 10; i >= 1; i--) {
//   if (i % 2 === 0) {
//     console.log("Even ", i);
//   } else {
//     console.log("Odd ", i);
//   }
// }
//write a for loop counting to 100 but only log the multiples of 7
// for (let i = 7; i <= 100; i += 7) {
//   console.log(i);
// }

// FIZZ BUZZ
// Write a loop that counts to 100
// on every multiple of 3 then log 'FIZZ'
// on every multiple of 5 then log 'BUZZ'
// on every multiple of 3 and 5 then log 'FIZZ BUZZ'
// else just log the number

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//************ while loop  *************/
// super scary bc you need to be careful for infinite loops

let number = 10;
let number2 = 12;
while (number <= 9) {
  console.log("inside the while loop", number);
  //MOST important thing is to increment whatever you are checking in the condition
  number += 1;
}

// do {
//   console.log("inside the do while loop", number);
//   //MOST important thing is to increment whatever you are checking in the condition
//   number += 1;
// } while (number <= 9);

//*********** Debugging example ******************/
let test = "blah blah";
console.log(test);
//*********************try and catch ***************/

try {
  console.log("Dog from up above in our code", dog);
} catch (error) {
  console.error("Here is our error", error);
} finally {
  console.log("The finally always executes");
}
