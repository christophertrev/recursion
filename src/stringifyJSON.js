// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === undefined){
  	return undefined
  }
  if (obj === null){
  	return 'null'
  }
  if (typeof(obj) ==="number" || obj === '' || typeof(obj) === "boolean"){
  	return obj.toString();
  }
  if ( typeof(obj)==='string'  ){
  	return '"' +obj.toString() +'"'
  }

  var isArray = Array.isArray(obj);
  /*
  if ( !isArray & (obj.length == undefined) ){
  	return obj.toString();
  }*/

  var str = (isArray? '[' : '{');
  var keys = (isArray ?  true : Object.keys(obj));
  var len = ( isArray ? obj.length : keys.length)


  for ( var i =0 ; i< len ; i++ ){
  	var word = (isArray ? stringifyJSON(obj[i]) : '"' + keys[i] +'":'+ stringifyJSON(obj[keys[i]]));
  	//str += '"' + keys[i] +'":'+ stringifyJSON(obj[keys]);
  	str += word;
  	if (i != len-1){
  		str+=',';
  	}
  }
  
  str += (isArray ? ']' : '}');
  return str

};
