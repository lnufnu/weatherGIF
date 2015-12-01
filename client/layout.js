Template.layout.helpers({
  'jweather' : function() {
    var city = Session.get('city');
    Meteor.call('getWeather', city, function(err, results) {
      console.log(results.content);
      Session.set('weather', JSON.parse(results.content).current_observation.weather);
    });
    return (Session.get('weather') + ' in ' + city).toUpperCase();
  }
});

//Template.layout.currentWeather=function(){
//  var city = Session.get('city');
//  Meteor.call('getWeather', city, function(err, results){
//    console.log(results.content);
//    Session.set('weather', JSON.parse(results.content).weather[0]);
//  });
//  return (Session.get('weather') + 'in' + city).toUpperCase();
//};

//the following function sets the value of city from the html template
//to the city set in the session to use in the query
Template.layout.events({
  'change .cities':function(event, template){
    Session.set('city', template.find('.cities').value);
  }
});
