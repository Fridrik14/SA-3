const data = require('../data/data.json');
const candyService = require('./candyservice');

function getAllOffers(){
    return data.offers
};

function getCandiesFromOffers(){
    //TODO get nested candies
    const nestedOffers = data.offers;
      for (var i = 0; i < nestedOffers.length; i++){
        var obj = nestedOffers[i];
        for (var key in obj){
            if(key == 'candies'){
                console.log(obj['id']);
                console.log(obj['name']);
                for (var index = 0; index < obj[key].length; index++){
                    console.log(candyService.getCandyById(obj[key][index]));
                }
            }
        }
    }
}

module.exports = {
    getAllOffers,
    getCandiesFromOffers
};