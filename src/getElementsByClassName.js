// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, startElement){
  // your code here
  //grab document
  $startElement = ( startElement ? startElement : document.body)
  //$body = document.body;
  console.log($startElement);


  //index through level to find any elements that have that class
  //if has any more children index through those
  //need to look through all elements in the document
};
