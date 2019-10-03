const data = require('../data/data.json');

function getAllPinatas(){
    return data.pinatas;
};

function getPinataById(id){
    return data.pinatas.find(u => u.id == id);
};

function createNewPinata(pinata){
    data.pinatas.push(pinata)
};

module.exports = {
    getAllPinatas,
    getPinataById,
    createNewPinata
};