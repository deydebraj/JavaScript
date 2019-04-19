const isSpecialArray = a => a.every((v, i) => v%2 == i%2);
//isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

//isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.



function isBelowThreshold(currentValue) {
  return currentValue < 40;
}
var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
