//Examples of Spread Operator in JavaScript ES6

//Add Elements in an array
var arr1 =["book", "toy"];
var arr2 =["ball", "PS4", ...arr1,"XBOX", "Nintendo"];
console.log(arr2);
//OUTPUT: ["ball", "PS4", "book", "toy", "XBOX", "Nintendo"]


//pass elements through function
function multiplyNumbers(a, b, c){
	console.log(a*b*c);
}
var arr =[1,2,3];
multiplyNumbers(...arr);
//OUTPUT: 6

//Copy in Arrays
var arr =[1,2,3];
var arr1 =[...arr];
arr1.push(4);
console.log(arr1);
//OUTPUT: 1,2,3,4

//Concatinate Arrays
var arr1 = [1,2,3];
var arr2 = [1,2,3];
arr1 = [...arr1, ...arr2];
OUTPUT: 1,2,3,1,2,3
arr1 = [...arr1,"hello", ...arr2];
//OUTPUT: 1,2,3,hello,1,2,3

//REST Operator
var arr1 = mul(2,2,3,4);
function multiply(mul,...arr){
	return arr.map(function(element){
		return mul*element;
	});
}
console.log(arr1);
//OUTPUT: 4,6,8
