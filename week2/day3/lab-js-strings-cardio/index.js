/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jelly";

// Your code here...
console.log(string1.indexOf("y"));

/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
const newStr = `${string2[2]}${string2[string2.indexOf("O")]}${
  string2[string2.length - 1]
}${string2[10]}`;
console.log(newStr);
/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...
const message = "NA".repeat(4) + " Batman!";
console.log(message);
/*******************************************
       Iteration 4 | Fruit Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruits =
  "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...

const startingIndex = fruits.indexOf("apple");
const finishingIndex = fruits.indexOf("apple") + 5;
console.log(fruits.slice(startingIndex, finishingIndex));
/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing OxyGeN linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";

// Check the first headline
// Your code here ...
if (funnyHeadline1.toLowerCase().includes("oxygen")) {
  console.log("The string includes the word 'oxygen'");
} else {
  console.log("The string does not include the word 'oxygen'");
}

// Check the second headline
// Your code here ...

/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";

// a) Print the string length
// Your code here ...

// b) Print the last character in the string
// Your code here ...
