const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const candyService = require('./services/candyservice');
const pinataService = require('./services/pinataservice');
const offerService = require('./services/offerservice');

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

//TODO Get all nested candies within offers
    //WIP Calling getCandiesFromOffers() atm for debugging purposes
//Model structure
app.get('/api/offers', function(req, res) {
    return res.json(offerService.getCandiesFromOffers());
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
    pinataService.createNewPinata(req.body);

    return res.status(201).send(req.body);
});

//Localhost:3000
app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});