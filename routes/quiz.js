var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var question = require('./../models/question')

var router = express.Router()
var maxLevel = 2

router.use(cookieParser())
router.use(bodyParser.urlencoded({extended:true}))

router.use(function(req, res, next){
  if(req.cookies.level == undefined){
    res.cookie('level', 1)
    res.redirect('/quiz/1')
  }else{
    var level = req.cookies.level
    if('/'+level == req.url){
      next()
    }else{
      res.redirect('/quiz/'+level)
    }
  }

})

router.route('/:level')
  .get(function(req, res){
    question.findOne({level: req.params.level}, function(err, data){
      if(err){
        throw err
      }else{
        res.render('question.ejs',{question: data})
      }
    })
  })

  .post(function(req, res){
    var userAnswer = req.body.answer.toLowerCase()
    question.findOne({level: req.params.level}, 'level answer', function(err, data){
      if(err){
        throw err
      }else{
        if(userAnswer == data.answer){
          var newLevel = Number(req.cookies.level)+1
          if(newLevel > maxLevel){
            res.redirect('/end')
            return
          }
          res.cookie('level', newLevel)
        }
        res.redirect('/quiz')
      }
    })
  })

module.exports= router
