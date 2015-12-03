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
      forecast = 'CLOUDY';
      return 'CLOUDY';
  }
});

Template.layout.events({

  "submit .searchCities": function (event) {

    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var text = event.target.text.value;

    // Insert a task into the collection - need to write function to pass it to
    // getWeather in server.js
    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";
  }

  'change .cities':function(event, template){
    Session.set('city', template.find('.cities').value);
  }
});
