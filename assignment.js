/*
1. example
##Return negative 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/
// solutions
// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }
// solutions

/*
2. example
##Return to Sanity
This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results =
    {sanity: 'Hello'};
  return results;
}

*/
/*
3. example
##Power of 4

Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)

Examples
powerOf4(1024) // returns true
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false

solutions;

const powerOf4 = n => typeof n === "number" && Math.log2(n) % 2 === 0;
*/
/*
4. example
##Human Readable Time



Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.


solutions;

function humanReadable (seconds) {
  let hours = Math.floor(seconds/3600);
  let minutes = Math.floor((seconds - (hours*3600))/60)
  let remain = seconds - (hours*3600)-(minutes*60);
  
  if(hours<10){
    hours = "0" + hours
  }
  if(minutes<10){
    minutes = "0" + minutes
  }
  if(remain < 10){
    remain = "0" + remain
  }
  return hours +  ":" + minutes +":" + remain
}
*/
/* 
# Remove duplication

Write a function that accepts an array of number as parameter, and it returns array after removing all duplicated numbers.

Example removeDuplication([1,2,3,2,4,6,2,6,7]) Output [1,3,4,7].

Here 2,6 are duplicated in array, so we should remove all numbers that are duplicated. The output will be 1,3,4,7 after removing 2,6.

Input : [1,2,1,2,1,1,2,2] , Output : [].

Input : [2,5,6,7,5,2,6] , Output: [7].

//solutions

const removeDuplication = arr =>
  arr.filter(val => arr.indexOf(val) === arr.lastIndexOf(val));

*/

/*

#String incrementer

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.


// solutions

const incrementString = strng =>
  strng.replace(/[0-8]?9*$/, val => ++val);
*/

//  Return Negative
/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

// solutions
function makeNegative(num) {
  return -Math.abs(num);
}
*/
/*
#Duck duck goose

DESCRIPTION:
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"] 
*/

// // solutions
// function duck_duck_goose(players, index) {
//   const chosenIndex = (index - 1) % players.length;
//   return players[chosenIndex].name;
// }

// // Example usage:
// const a = { name: "Player A" };
// const b = { name: "Player B" };
// const c = { name: "Player C" };
// const d = { name: "Player D" };

// console.log(duck_duck_goose([a, b, c, d], 1)); // Output: Player A
// console.log(duck_duck_goose([a, b, c, d], 5)); // Output: Player A
// console.log(duck_duck_goose([a, b, c, d], 4)); // Output: Player D
//////////////////////////////////////
/*
8 kyu
Get Planet Name By ID

 DESCRIPTION:
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"


function getPlanetName(id) {
  switch (id) {
    case 1:
      return (name = "Mercury");
    case 2:
      return (name = "Venus");
    case 3:
      return (name = "Earth");
    case 4:
      return (name = "Mars");
    case 5:
      return (name = "Jupiter");
    case 6:
      return (name = "Saturn");
    case 7:
      return (name = "Uranus");
    case 8:
      return (name = "Neptune");
    default:
      return "No player found";
  }
}
console.log(getPlanetName(3));


/////
function getPlanetName(id){
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune'
  }[id]
}
 */

/*
8kyu
#Find the Remainder
DESCRIPTION:
Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)

function remainder(n, m) {
  return n > m ? n % m : m % n;
}
console.log(remainder(13, -11));

*/
/*
8kyu
#Classy Classes
Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

Task
Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 

class Person {
  constructor(name, age) {
    this.info = `${name}s age is ${age}`;
  }
}

*/

