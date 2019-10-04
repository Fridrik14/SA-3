const data = require('../data/data.json');
const candyService = require('./candyservice');

function getAllOffers(){
    const nestedOffers = data.offers;
    const completeOffers = [];
    //Iterate through all offers
      for (var i = 0; i < nestedOffers.length; i++){
        var result = [];
        var obj = nestedOffers[i];
        //Iterate through all elements in object
        for (var key in obj){
            if(key == 'candies'){
                //Iterate through list of candies
                for (var index = 0; index < obj[key].length; index++){
                    //Push candy object to array
                    result.push(candyService.getCandyById(obj[key][index]));
                }
                var temp = {"id": obj['id'], "name": obj['name'], "candies": result};
                completeOffers.push(temp);
            }
        }
    }
    return completeOffers;
}

module.exports = {
    getAllOffers,
};