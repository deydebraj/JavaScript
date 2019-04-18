function missingNums(arr) {
	var value = arr.length+1;
	var sum = value*(value+1)/2;
	var temp = 0;
	for(var i=0;i<arr.length;i++){
		temp += arr[i];
	}
	var value = sum - temp;
	return value;
}
//missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
//missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
