/*Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21

If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.*/


function superSize(num) {
  var numString = num.toString();
  var numArray = [];
  for (i=0; i < numString.length; i++) {
    numArray[i] = numString[i];
  }
  numArray.sort();
  numArray.reverse();
  for (i=1; i < numArray.length; i++) {
    numArray[0] += numArray[i];
  }
  let numINT = parseInt(numArray[0]);
  return numINT;
}
superSize(987456321);
