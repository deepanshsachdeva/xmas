var express = require('express')
var cookieManager = require('./../modules/cookieManager')

var router = express.Router()

router.route("/")
    .get(function(req, res){
        cookieManager.clearCookie(req, res)
        res.render('end.ejs')
    })

module.exports= router