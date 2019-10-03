const data = require('../data/data.json');
const candyService = require('./candyservice');

function getAllOffers(){
    return data.offers
};

function getCandiesFromOffers(){
    //TODO get nested candies
}

module.exports = {
    getAllOffers
};