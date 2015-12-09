Template.layout.helpers({
  'setDefault': function(forecast) {
    if (forecast === undefined)
      return 'YOUR WEATHER';
    else
      return forecastString;
  },
  'currentWeather': function() {
    var city = Session.get('city');
    var state = Session.get('state');
    console.log(city);
    console.log(state);

//  CALLING API TOO MUCH... returning string to work on the giphy part
    Meteor.call('getWeather', city, state, function(err, results) {
      console.log(results.content);
      Session.set('weather', JSON.parse(results.content).current_observation.weather);
    });
    var forecast = Session.get('weather');
    return (forecast + ' in ' + city).toUpperCase();
//    forecast = 'SUNNY';
//    return 'SUNNY';
  },
  'setForcast': function (forecast) {
    forcast: "somestring not undefine dont display undedined godammnit"
    forcast:
  setforecastObject: forcast;
}
});

{{forecast}}
