//Complex Object Manupulation
var myMusic= 
    {
        "15":{
        "artist":"john",        //Question 1: Replacing artist name
        "album":"blue sky",
        "formats":["cd","dvd"],
        "nomines": "grammy"
    },
    
        "54": {
        "artist":"dave",
        "album":"hello beautiful",  //Question 2: Change the album name
        "formats":["cd","dvd"],  //Question 3: add netflix here
        "nomines": "grammy"
    }
};

//keeps the copy of the collection for the test
var collectionCopy =JSON.parse(JSON.stringify(myMusic));
//changing 
function updateRecords(id,prop,value){
    //delete if empty
    if(value===""){
        delete myMusic[id][prop];   
    } 
    else if(prop==="formats"){
        myMusic[id][prop]=myMusic[id][prop] || [];
        myMusic[id][prop].push(value); 
    }
    else{
        myMusic[id][prop] = value;
    }
    return myMusic;
}
updateRecords("54","album","I am the new album");
updateRecords("54","formats","Netflix");
console.log(updateRecords(15,"artist","ABBA"));
