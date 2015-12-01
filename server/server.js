Meteor.methods({
    'getWeather' : function(city){
      return Meteor.http.call('GET', 'http://api.wunderground.com/api/8102e9fef9e3a203/conditions/q/TX/' + city + '.json');
    }
})

Meteor.methods({
    'getWeatherGif':function(forecast){
      return Meteor.http.call('GET', 'http://api.giphy.com/v1/gifs/search?q=' + forecast + '&api_key=dc6zaTOxFJmzC');
    }
})
//need to create corresponding endpoints and functions and define forecast object
