Template.layout.helpers({
  'setDefault': function() {
    var city = Session.get('city');
    var forecast = Session.get('weather');
    if (forecast === undefined) {
      return 'YOUR WEATHER';
    } else {
      return (forecast + ' in ' + city).toUpperCase();
    }
  },
  'currentWeather': function() {
    var city = Session.get('city');
    var state = Session.get('state');

    Meteor.call('getWeather', city, state, function(err, results) {
      Session.set('weather', JSON.parse(results.content).current_observation.weather);
    });
  },
});
