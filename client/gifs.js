Template.gifs.helpers ({
  'weatherGif': function() {
  console.log("...i'm in here");
    Meteor.call('getWeatherGif', city, function(err, results) {
      console.log('I MADE IT');
      Session.set('gif', JSON.parse(results.content).url)
    });
    var gifString = Session.get('gif');
    return gifString;
  }
});
