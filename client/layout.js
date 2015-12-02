Template.layout.helpers({
  'currentWeather': function() {
    var city = Session.get('city');
    Meteor.call('getWeather', city, function(err, results) {
//      console.log(results.content);
      Session.set('weather', JSON.parse(results.content).current_observation.weather);
    });
    forecast = Session.get('weather');
    return (forecast + ' in ' + city).toUpperCase();
  },
  'weatherGif': function() {
    Meteor.call('getWeatherGif', city, function(err, results) {
      console.log(results.content);
      Session.set('gif', JSON.parse(results.content))
    });
    var gifString = Session.get('gif')
    return gifString;
  }
});

Template.layout.events({
  'change .cities':function(event, template){
    Session.set('city', template.find('.cities').value);
  }
});
