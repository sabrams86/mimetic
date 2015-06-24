module.exports = function(array, verb, path){
  if (!array || !verb || !path){
    return null;
  }
  var result = null;
  var pathArray = path.split('/');
  for (var i = 0; i < array.length; i++){
    if (verb === array[i].verb){
      var objectPathArray = array[i].path.split('/');
      if (pathArray.length === objectPathArray.length){
        var check = 1;
        objectPathArray.forEach(function(e, i){
          if(e === pathArray[i] || e.charAt(0) === ':'){
            check = 1;
          } else {
            check = -1;
          }
        });
        if (check === 1) {
          result = array[i];
          break;
        }
      }
    }
  }
  return result;
}
