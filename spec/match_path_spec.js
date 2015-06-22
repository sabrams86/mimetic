var matchPath = require('./../lib/match_path');

describe('matchpath', function(){

  it('returns an object that matches the inputs exactly', function(){
    var routeDefinitions = [
      {verb: 'get', path: '/me'},
      {verb: 'get', path: '/you'},
      {verb: 'post', path: '/me'},
    ];
    var actual = matchPath(routeDefinitions, 'get', '/me');
    var expectedOutput = {verb: 'get', path: '/me'};
    expect(actual).toEqual(expectedOutput);
  });

  it('returns null if the verb doesnt match any in the route definitions', function(){
    var routeDefinitions = [
      {verb: 'get', path: '/me'},
      {verb: 'get', path: '/you'},
      {verb: 'post', path: '/you'},
    ];
    var actual = matchPath(routeDefinitions, 'post', '/me');
    var expectedOutput = null;
    expect(actual).toEqual(expectedOutput);
  });

});
