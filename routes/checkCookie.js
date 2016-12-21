var cookies = require('cookies')

var checkCookies = function(''){
  var name = cookies.get('name')
  var level = cookies.get('level')

  if(name == undefined){
    cookies.set('name','user')
    cookies.set('level',0)


  }
}
