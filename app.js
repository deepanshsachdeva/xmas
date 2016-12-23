var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()

app.set('view engine', 'ejs')

app.use(cookieParser())
app.use('/add', require('./routes/add'))
app.use('/quiz', require('./routes/quiz'))


app.get('/set/:level', function(req, res){
  var level = req.params.level
  res.cookie('level', level).send('set to '+level)
})

app.get('/clear', function(req, res){
  res.clearCookie('level')
  res.send('cleared')
})


app.listen(3000, function(){
  console.log('server running on port 3000');
})
