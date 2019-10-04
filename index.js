const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const candyService = require('./services/candyservice');
const pinataService = require('./services/pinataservice');
const offerService = require('./services/offerservice');
const surpriseFile = 'surprise.txt';

app.use(bodyParser.json());

//No model validation
app.get('/api/candies', function(req, res) {
    return res.json(candyService.getAllCandies()); 
});

app.get('/api/candies/:candyId', function(req, res) {
    const candyId = req.params.candyId;
    return res.json(candyService.getCandyById(candyId));
});

app.post('/api/candies', function(req, res) {
    //Create new candy from body
    //TODO selfgenerate new id?
    candyService.createNewCandy(req.body);
    //Return correct response along with new candy
    return res.status(201).send(req.body);
});

//Returns all Offers with nested candies for each one
app.get('/api/offers', function(req, res) {
    return res.json(offerService.getAllOffers());
});

//No model validation
//Surprice excluded
app.get('/api/pinatas', function(req, res) {
    return res.json(pinataService.getAllPinatas())
});

//Surprice excluded
app.get('/api/pinatas/:pinataId', function(req, res) {
    const pinataId = req.params.pinataId;
    return res.json(pinataService.getPinataById(pinataId));
});
//Surprise included
app.post('/api/pinatas', function(req, res) {
    // add secret to the new pinata
    req.body.surprise = "This is surpirse text for "+req.body.name;
    pinataService.createNewPinata(req.body);

    return res.status(201).send(req.body);
});

app.put('/api/pinatas/:pinataId/hit', function(req, res) {
    const pinataId = req.params.pinataId;
    var result = pinataService.getPinataById(pinataId);
    // if the pinata has already max hit has already been reached
    if((result.hasOwnProperty('maxReached:'))){
        return res.status(423);
    }
    //Check if pinata object has currentHit element, if not give object element
    if(!(result.hasOwnProperty('currentHit:'))){
        result['currentHit'] = '1';
    }
    //If pinata object has currentHit, increase hit by one
    else{
        result.currentHit += 1;
        //Check if limit has been reached, return 200 OK and surprise in body
        if(result.currentHit == result.maximumHits){
            result["maxReached"] = true;
            //TODO: EF surprise er texti:
            //      Appenda surprise text í surprise.txt í root 
            //      EF surprise er URL:
            //      Download using the request package
            //      Pipe into a /images using a write stream
            const surprise = result.surprise;
            
            fs.appendFile(surpriseFile, surprise+"\n", function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
            return res.status(200).send(result.surprise)
        }
        //Limit not reached, return 204 and do nothing
        return res.status(204)
    }
});

//Localhost:3000
app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});