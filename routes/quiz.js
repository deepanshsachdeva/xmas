var express = require('express')
var cookieParser = require('cookie-parser')
var router = express.Router()

router.use(cookieParser())

router.use(function(req, res, next){
  if(req.cookies.level == undefined){
    res.cookie('level', 0)
    res.redirect('/quiz/0')
  }else{
    var level = req.cookies.level
    if('/'+level == req.url){
      next()
    }else{
      res.redirect('/quiz/'+level)
    }
  }

})

router.get('/:level', function(req, res){
  res.send(req.params.level)
})

module.exports= router
