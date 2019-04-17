function find_index(arr, str) {
	for(var i=0;i<arr.length ; i++){
		if(arr[i]==str)
			return arr.indexOf(arr[i]);
	}
}
//find_index(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
//find_index(["a", "g", "y", "d"], "d") ➞ 3
//find_index(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
