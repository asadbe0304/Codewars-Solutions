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

