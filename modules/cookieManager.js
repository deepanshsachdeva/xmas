module.exports = {
    setCookie: function(req, res, value){
        res.cookie('level', value)
    },

    clearCookie: function(req, res){
        res.clearCookie('level')
    }
}