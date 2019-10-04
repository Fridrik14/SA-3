const data = require('../data/data.json')

function getAllCandies() {
    return data.candies;
};

function getCandyById(id) {
    return data.candies.find(u => u.id == id)
};

function createNewCandy(candy){
    // gets the highest id in the list and returns it +1 which would be the next id
    const nextId = 1+Math.max.apply(Math, data.candies.map(function(u) { return u.id; }));
    candy["id"] = nextId;
    data.candies.push(candy)
};

module.exports = {
    getAllCandies,
    getCandyById,
    createNewCandy
};