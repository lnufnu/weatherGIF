//RecentlyQueried = new Mongo.Collection("recentlyQueried");

//Template.body.helpers({
//  recentlyQueried: () {

//  }
//});


Template.recentCities.helpers({
  'setRecentlyQueried': function() {
    var recentlyQueried = Session.get('recentlyQueried');
//    console.log(recentlyQueried);
  },
  'saveCities': function() {
//    var recentlyQueried = Session.get('recentlyQueried');
    var city = Session.get('city');
    var state = Session.get('state');
    recentlyQueried.push(city);
    Session.set('recentlyQueried', recentlyQueried);
//    console.log(recentlyQueried);
    return recentlyQueried;
  }
});
