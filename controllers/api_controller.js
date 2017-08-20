var express = require('express');
var burger  = require('../models/burger.js')
var router = express.Router();

// ROUTING 

router.get('/', function(req,res){
    burger.all(function(data){
        res.json(data);
    })
})


router.get('/:id', function(req,res){
    burger.find(req.params.id,function(data){
        res.json(data)
    })
})

module.exports = router;