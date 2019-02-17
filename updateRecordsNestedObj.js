//Complex Object Manupulation
var myMusic= 
    {
        "15":{
        "artist":"john",        //Replacing artist name
        "album":"blue sky",
        "formats":["cd","dvd","sd"],
        "nomines": "grammy"
    },
    
        "54": {
        "artist":"dave",
        "album":"hello beautiful",
        "formats":["cd","dvd","sd"],
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
    else if(prop==="album"){
        myMusic[id][prop]=myMusic[id][prop] || [];
        myMusic[id][prop].push(value); 
    }
    else{
        myMusic[id][prop] = value;
    }
    return myMusic;
}
 console.log(updateRecords(15,"artist","ABBA"));
