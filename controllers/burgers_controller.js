var express = require('express');
var burger  = require('../models/burger.js')
var router = express.Router();

// ROUTING 

router.get('/', function(req,res){
    burger.all(function(data){
        res.render('index', {burgers: data})
    })
})

router.get('/show/:id', function(req,res){
    burger.find(req.params.id,function(data){
        res.render('show', data[0])
    })
})

router.post('/', function(req,res){
    burger.create(req.body.burger_name, function(data){
        res.redirect('/')
    })
})

router.put('/:id', function(req,res){
    burger.update('devoured',req.body.choice,req.params.id,function(data){
        console.log(data)
        res.redirect('/')
    })
})

router.delete('/:id', function(req,res){
    burger.delete(req.params.id, function(data){
        console.log('hey')
        res.redirect('/')
    })
})



module.exports = router;

