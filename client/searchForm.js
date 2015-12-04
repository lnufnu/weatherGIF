//Template.searchForm.helpers ({
//  'submit .searchCity': function(event){
//    Session.set('city', event.target[0].value);
//    console.log(Session.get('city'));
//  }
//});

Template.searchForm.events({
  "submit form": function (event, template) {
    event.preventDefault();
    Session.set('city', event.target.cities.value);
    Session.set('state', event.target.states.value);
    console.log( Session.get('city'), Session.get('state') );
    event.target.cities.value = "";
    event.target.states.value = "";
  }
});
