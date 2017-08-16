var express = require('express');
var burger  = require('../models/burger.js')

var router = express.Router();

// ROUTING 

router.get('/', function(req,res){
    indexGET(req,res)
})

function indexGET(req,res){
    console.log('hey');
};

module.exports = router;

