const data = require('../data/data.json');
const candyService = require('./candyservice');

function getAllOffers(){
    const nestedOffers = data.offers;
    const completeOffers = [];
    //Iterate through all offers
      for (var i = 0; i < nestedOffers.length; i++){
        var result = [];
        var obj = nestedOffers[i];
        for (var key in obj){
            if(key == 'candies'){
                for (var index = 0; index < obj[key].length; index++){
                    result.push(candyService.getCandyById(obj[key][index]));
}
                var test = {"id": obj['id'], "name": obj['name'], "candies": result};
                completeOffers.push(test);
            }
        }
    }
    return completeOffers;
}

module.exports = {
    getAllOffers,
};