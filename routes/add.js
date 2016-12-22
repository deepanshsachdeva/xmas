var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router()

router.use(bodyParser.urlencoded({extended:true}))

router.route('/')
    .get(function(req, res){
        var questionData = {
            
        }
        res.render('add.ejs', {question: questionData})
    })

    .post(function(req, res){

    })