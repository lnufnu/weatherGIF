var Future = Npm.require( 'fibers/future' );

Meteor.methods({

  'getWeather': function(city, state){
    var future = new Future();
    console.log(city);
    console.log(state);
    HTTP.get('http://api.wunderground.com/api/8102e9fef9e3a203/conditions/q/' + state + '/' + city + '.json', {}, function (error, response) {
      if (error) {
        future.return (error);
      } else {
        future.return (response);
      }
    });
  return future.wait();
  },

  'getWeatherGif': function(forecast){
    var giphyKey = '&api_key=dc6zaTOxFJmzC';
    return Meteor.http.call('GET', 'http://api.giphy.com/v1/gifs/search?q=' + forecast + giphyKey);
  }
});
