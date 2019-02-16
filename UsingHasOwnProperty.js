// Using hasOwnProperty

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigth"
};

function fun(value){
    if(myObj.hasOwnProperty(value)){
        return myObj[value];
    }
    else{
        return "Not Found"
    }
}

console.log(fun("gift"));
