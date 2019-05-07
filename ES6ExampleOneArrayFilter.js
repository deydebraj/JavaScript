//FILTER FILTER FILTER FILTER FILTER FILTER 
//FILTER FILTER FILTER FILTER FILTER FILTER 

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



const companies = [
{name:"Seven", category:"Tech", start: 1990, end:2019},
{name:"Two", category:"Tech", start: 1970, end:2010},
{name:"One", category:"Oil", start: 1980, end:1983},
{name:"Five", category:"Gas", start: 1985, end:2000}
];
const retailCompanies = companies.filter(fun => fun.category ==='Tech');

const eightys = companies.filter(fun => (fun.start >= 1980 && fun.end < 1990));

const lastedTenYears = companies.filter(fun => (fun.end - fun.start > 10));
