//Replacing the if-else chain with switch statements
//Using strict comparison (===) 
function ifElseStatement(val){
var item = "";

    if(val === "bob"){
        item = "Marley"; 
    } else if(val === 42){
        item = "You are right";
    } else if(val=== 1){
        item = "There is no number 1";
    } else if(val === 99){
        item = "I am 99";
    }

    return item;
}
console.log(ifElseStatement(42));       //calling the function



function changeToSwitch(val1){
    var item1 = "";
    switch(val1){
        case "bob":
            item1 = "Marley";
            break;
        case 42:
            item1 = "You are right";
            break;
        case 1:
            item1 = "There is no number 1";
            break;
        case 99:
            item1 = "I am 99";
            break;
        }
        
    return item1;
}

console.log(changeToSwitch(42));       //calling the function
