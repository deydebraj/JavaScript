//Find a contact from the directory and return what that person likes   
//Find a lastname from first name   

var contacts=[
    {
        "firstname" : "debraj",
        "lastname": "dey",
        "number" : "123456789",
        "likes": ["football, coding"]
    },
    {
        "firstname" : "andy",
        "lastname": "hill",
        "number" : "987656789",
        "likes": ["food, cricket"]
    },
    {
        "firstname" : "rohan",
        "lastname": "ray",
        "number" : "125956789",
        "likes": ["nba, pizza"]
    }
];

function find(name,prop){
    for(var i=0;i<contacts.length;i++)
    {
        if(contacts[i].firstname===name){
        return contacts[i][prop] || "No Such Property";
        }
    }
    return "Contact Not Found"              //else
}

console.log("Likes are: "+find("debraj","likes"));
console.log("Last name is: "+find("debraj","lastname"));
