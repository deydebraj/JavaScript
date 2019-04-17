function numberSyllables(word) {
	var count=1;
	for(var i=0; i<word.length; i++){
		if(word.charAt(i)=='-')
			count++;	
	}
	return count;
}

//numberSyllables("buf-fet") ➞ 2
//numberSyllables("beau-ti-ful") ➞ 3
//numberSyllables("mon-u-men-tal") ➞ 4
//numberSyllables("on-o-mat-o-poe-ia") ➞ 6
