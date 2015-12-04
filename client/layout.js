Template.layout.helpers({
    'currentWeather': function() {
      var city = Session.get('city');
  //  CALLING API TOO MUCH... returning string to work on the giphy part
  //    Meteor.call('getWeather', city, function(err, results) {
  //      console.log(results.content);
  //      Session.set('weather', JSON.parse(results.content).current_observation.weather);
  //    });
  //    forecast = Session.get('weather');
  //    return (forecast + ' in ' + city).toUpperCase();
        forecast = 'RAIN';
        return 'RAIN';
    }
  });
