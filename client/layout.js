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
        forecast = 'RAINY';
        return 'RAINY';
    }
  });


Template.layout.events({
    'submit .searchCity': function (event) {
//        event.preventDefault();
        console.log("wont ever change");
        console.log(event.target);
        console.log(event.target[0].value);
        console.log(event.target[2].value);

        event.target[0].value = Session.set('city');
        event.target[2].value = Session.set('state');

        console.log(Session.get('city'));
  //      console.log(Session.get('city'));
        console.log(Session.get('state'));

        event.target[0].value = "";
        event.target[2].value = "";
    }
//  'change .cities':function(event, template){
//    Session.set('city', template.find('.cities').value);
//  }
});
