const data = require('../data/data.json')

function getAllCandies() {
    return data.candies;
};

function getCandyById(id) {
    return data.candies.find(u => u.id == id)
};

function createNewCandy(candy){
    data.candies.push(candy)
};

module.exports = {
    getAllCandies,
    getCandyById,
    createNewCandy
};