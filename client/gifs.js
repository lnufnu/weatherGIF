if (Meteor.isClient) {
  Template.gifs.helpers ({
      'weatherGif': function() {
  //      var city = Session.get('city');
  //      had this function taking city as param...may use later
  //      with different API
        Meteor.call('getWeatherGif', forecast, function(err, results) {
          parsed = JSON.parse(results.content);
          Session.set('gif', parsed.data[0].embed_url);
        });
        var gif = Session.get('gif');
        return ('<iframe src="' + gif + '">');
      }
  });
}
