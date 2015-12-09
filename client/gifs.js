Template.gifs.helpers ({
  'weatherGif': function() {
    var forecast = Session.get('weather');
    Meteor.call('getWeatherGif', forecast, function(err, results) {
      parsed = JSON.parse(results.content);
      Session.set('gifPath', parsed.data[0].embed_url);
    });
    var gifPath = Session.get('gifPath');
    return gifPath;
    }
});
