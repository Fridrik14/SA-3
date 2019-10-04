const data = require('../data/data.json');

function getAllPinatas(){
    var result = data.pinatas;
    var completedPinatas = [];
    //TODO Tékka hvort currentHits sé til?
    for (var i = 0; i < result.length; i++) {
        var temp = { 
            "id": result[i].id, 
            "name": result[i].name, 
            "maximumHits": result[i].maximumHits, 
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
    }

};

function createNewPinata(pinata){
    data.pinatas.push(pinata);
};

module.exports = {
    getAllPinatas,
    getPinataById,
    createNewPinata
};