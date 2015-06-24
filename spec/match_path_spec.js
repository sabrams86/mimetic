var matchPath = require('./../lib/match_path');

describe('matchpath', function(){

  it('returns an object that matches the inputs exactly', function(){
    var routeDefinitions = [
      {verb: 'get', path: '/me'},
      {verb: 'get', path: '/you'},
      {verb: 'post', path: '/me'},
    ];
    var actual = matchPath(routeDefinitions, 'get', '/you');
    var expectedOutput = {verb: 'get', path: '/you'};
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

  it('returns null if all arguments arent given', function(){
    var routeDefinitions = [
      {verb: 'get', path: '/me'},
      {verb: 'get', path: '/you'},
      {verb: 'post', path: '/you'},
    ];
    var actual = matchPath(routeDefinitions, 'get');
    var expectedOutput = null;
    expect(actual).toEqual(expectedOutput);
  });

  it('returns a dynamically matched object', function(){
    var routeDefinitions = [
      { verb: 'get', path: '/artists/:artist_name/albums' },
      { verb: 'get', path: '/artists/:artist_name/albums/:album_id' },
      { verb: 'get', path: '/:name' },
    ];
    var expectedOutput = { verb: 'get', path: '/:name' };
    var actual = matchPath(routeDefinitions, 'get', '/steve');
    expect(actual).toEqual(expectedOutput);
  });

  it('returns the first matched object', function () {
    var routeDefinitions = [
      { verb: 'get', path: '/:id' },
      { verb: 'get', path: '/new' },
    ];
    var expectedOutput = { verb: 'get', path: '/:id' };
    var actual = matchPath(routeDefinitions, 'get', '/new');
    expect(actual).toEqual(expectedOutput);
  });
});
