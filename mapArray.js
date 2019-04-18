function mysteryFunc(arr, num) {
	const map1 = arr.map(x => x % num);
	return map1;
}
/* Sample Inputs and Outputs
[5, 7, 8, 2, 1], 2 ➞ [1, 1, 0, 0, 1]
[9, 8, 16, 47], 4 ➞ [1, 0, 0, 3]
[48, 22, 0, 19, 33, 100], 10 ➞ [8, 2, 0, 9, 3, 0]*/ 


function additiveInverse(arr) {
	var map1 = arr.map(x => x*(-1));
	return map1;
}
/* Sample Inputs and Outputs
additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]
additiveInverse([1, 1, 1, 1, 1]) ➞ [-1, -1, -1, -1, -1]
additiveInverse([-5, -25, 35]) ➞ [5, 25, -35]*/
