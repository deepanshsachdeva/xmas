var db = require('./db')
var schema = db.Schema

var questionSchema = new schema({
    level: Number,
    text: String,
    extra: String
})

var question = db.model('question', questionSchema)

module.exports = question