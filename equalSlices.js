function equalSlices(total, people, each) {
	if(total>=people*each)
		return true;
	else
		return false;
}
console.log(equalSlices(11,5,2));


//equalSlices(11, 5, 2) ➞ true
// 5 people x 2 slices each = 10 slices < 11 slices

//equalSlices(11, 5, 3) ➞ false
// 5 people x 3 slices each = 15 slices > 11 slices
