ages = [10,15,4,4,94,47,74,34,97,46,94,54] 
//Find the ages which are above 21
let temp = [];
for(let i = 0; i<ages.length; i++){
	if(ages[i]>20){
		temp.push(ages[i]);
	}
}

const temp = ages.filter(function (fun){
	if(fun>= 21){
		return true;
	}
});

const temp = ages.filter(fun => fun >= 21);
