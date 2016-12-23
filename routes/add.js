var express = require('express')
var bodyParser = require('body-parser')
var question = require('./../models/question')
var router = express.Router()

router.use(bodyParser.urlencoded({extended:true}))

router.route('/')
    .get(function(req, res){
        var notice = ""

        if(req.cookies.qadd){
            notice = "Question added"
            res.clearCookie('qadd')
        }

        res.render('add.ejs', {data: notice})
    })

    .post(function(req, res){
        var newQuestion = question({
            level: req.body.level,
            text: req.body.text,
            answer: req.body.answer,
            extra: req.body.extra
        })

        newQuestion.save(function(err){
            if(err){
                throw err
            }else{
                console.log('question added')
            }
        })
        
        res.cookie('qadd', true)
        res.redirect('/add')
    })

module.exports = router