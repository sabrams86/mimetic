module.exports = function (input) {
  var urlQuery = input;
  urlQuery = urlQuery.replace(/^\?/,"");
  var params = {};
  var queryArray = urlQuery.split('&');
  for(i=0; i<queryArray.length; i++){
      var querySet = queryArray[i].split('=');
      var key = querySet[0];
      var value = querySet[1];
      if( key[key.length-1] === ']' && key[key.length-2] != '['){
        subPair = key.split('[');
        var keyName = subPair[0];
        var subKey = subPair[1];
        subKey = subKey.substr(0,subKey.length-1);
        params[keyName] = params[keyName] || {};
        params[keyName][subKey] = value;
      } else if ( key[key.length-1] === ']' && key[key.length-2] === '[') {
        key = key.substr(0,key.length-2);
        params[key] = params[key] || [];
        params[key].push(value);
      } else {
      params[key] = value;
      }
  }
  return params
}
