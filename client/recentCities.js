//RecentlyQueried = new Mongo.Collection("recentlyQueried");

//Template.body.helpers({
//  recentlyQueried: () {

//  }
//});


Template.recentCities.helpers({
  'setRecentlyQueried': function() {
    var recentlyQueried = Session.get('recentlyQueried');
    console.log(recentlyQueried);
  },
  'saveCities': function() {
//    var recentlyQueried = Session.get('recentlyQueried');
    var city = Session.get('city');
    var state = Session.get('state');
    recentlyQueried.push(city);
    Session.set('recentlyQueried', recentlyQueried);
    console.log(recentlyQueried);
    return recentlyQueried;
  }


});



if (Meteor.isClient) {
 // This code only runs on the client
 Template.body.helpers({
   tasks: function () {
     return Tasks.find({});
   }
 });
}



Template.layout.helpers({
    'currentWeather': function() {
      var city = Session.get('city');
      var state = Session.get('state');
  //  CALLING API TOO MUCH... returning string to work on the giphy part
  //    Meteor.call('getWeather', city, state, function(err, results) {
  //      console.log(results.content);
  //      Session.set('weather', JSON.parse(results.content).current_observation.weather);
  //    });
  //    forecast = Session.get('weather');
  //    return (forecast + ' in ' + city).toUpperCase();
        forecast = 'RAIN';
        return 'RAIN';
    }
  });
