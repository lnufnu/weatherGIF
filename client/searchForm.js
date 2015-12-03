Template.searchForm.events({
  'submit .searchCity': function (event) {
    event.preventDefault();
    console.log("wont ever change");
    console.log(event.target);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target.cities.value);

//        event.target[0].value = Session.set('city');
//        event.target[1].value = Session.set('state');

    console.log(Session.get('city'));
//      console.log(Session.get('city'));
    console.log(Session.get('state'));

//      event.target[0].value = "";
//      event.target[2].value = "";
  }
//  'change .cities':function(event, template){
//    Session.set('city', template.find('.cities').value);
//  }
});
