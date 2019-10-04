const data = require('../data/data.json');

function getAllPinatas(){
    var result = data.pinatas;
    var completedPinatas = [];
    for (var i = 0; i < result.length; i++) {
        var temp = { 
            "id": result[i].id, 
            "name": result[i].name, 
            "maximumHits": result[i].maximumHits, 
            "currentHits": result[i].currentHits
        }
        completedPinatas.push(temp);
    }
    return completedPinatas;
};

function getPinataById(id){
    var result = data.pinatas.find(u => u.id == id);
    return { 
        "id": id, 
        "name": result.name, 
        "maximumHits": result.maximumHits,
        "currentHits": result.currentHits
    }

};

function addCounter(){
    var result = data.pinatas
    for (var i = 0; i < result.length; i++) {
        result[i]["currentHits"] = 0;
    }
    
}

function createNewPinata(pinata){
    // gets the highest id in the list and returns it +1 which would be the next id
    const nextId = 1+Math.max.apply(Math, data.pinatas.map(function(u) { return u.id; }));
    pinata["id"] = nextId;
    const pinataToAdd = {
        "id": pinata["id"],
        "name": pinata["name"],
        "maximumHits": pinata["maximumHits"],
        "currentHits":0,
        "surprise": pinata["surprise"]
    };
    data.pinatas.push(pinataToAdd);
};

module.exports = {
    getAllPinatas,
    getPinataById,
    createNewPinata,
    addCounter
};