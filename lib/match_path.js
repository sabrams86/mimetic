module.exports = function(array, verb, path){
var result = null;
array.forEach(function(object){
  if (verb === object.verb){
    if (path === object.path){
      result = object;
    }
  }
});
return result;

}
