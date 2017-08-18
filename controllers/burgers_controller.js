var express = require('express');
var burger  = require('../models/burger.js')
var ormFile = require('../config/orm.js');
var orm = ormFile();
var router = express.Router();

// ROUTING 

router.get('/', function(req,res){
    orm.selectAll(function(data){
        res.render('index', {burgers: data})
    })
})

router.post('/', function(req,res){
    orm.insertOne(req.body.burger_name, function(){
        res.redirect('/')
    })
})

router.put('/', function(req,res){
    burgerPUT(res,req)
})

router.delete('/', function(req,res){
    burgerDELETE(req,res);
})

module.exports = router;

