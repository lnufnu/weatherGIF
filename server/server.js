Meteor.methods({
  'getWeather': function(city, state){
    return Meteor.http.call('GET', 'http://api.wunderground.com/api/8102e9fef9e3a203/conditions/q/'+ state + '/' + city + '.json');
  },

  'getWeatherGif': function(forecast){
    var giphyKey = '&api_key=dc6zaTOxFJmzC';
    return Meteor.http.call('GET', 'http://api.giphy.com/v1/gifs/search?q=' + forecast + giphyKey);
  }
});
