// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, startElement){
  // your code here
  //grab document
  var results = []; 
  $startElement = ( startElement ? startElement : document.body);
  //$body = document.body;
  //console.log($startElement);
  ($startElement.classList.contains(className) ? results.push($startElement) : false)

  //get childNodes
  var $children = $startElement.childNodes; 
  for (var i = 0; i < $children.length; i++) {
  	if ($children[i].nodeName !== "#text") {
  		results = results.concat(getElementsByClassName(className,$children[i]));
  	}
  }
  return results

};
