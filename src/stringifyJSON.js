// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var isArray = Array.isArray(obj);

  var str = (isArray? '{' : '[');
  var keys = Object.keys(obj);
  for (var i =0; i< keys.length;i++){
  	str += '"' + key[i] +'":"'+ obj[key]+'"';
  }

  str += (isArray ? '}' : ']');
  return str

};