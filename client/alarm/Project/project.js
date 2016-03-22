
Template.project.helpers({
  alarmproject: function () {
      return Alarmproject.find({},{sort:{createdAt: -1}, limit: 10})
  }

});

Template.addproject.onRendered(function () {
  
     $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

});


Template.project.events({
  'click #deleteproject': function()
    {
      Alarmproject.remove(this._id);
    }

});

Template.project.events({
  'click #sample': function()
    {

    Router.go("addproject");

    }

});

Template.addproject.events({

 'click [data-action="load"]': function (event) {
          Alarmproject.insert({
              timehour: $("#aHour").val(),
               timeminute: $("#aMinute").val(),
                timesecond: $("#aSecond").val(),
                ap: $("#AP").val(),
              dateproject: $("#startdateproject").val(),
              subproject: $("#subjetcodeproject").val(),
              desproject: $("#descriptiveproject").val(),
              messagesproject: $("#messagesproject").val(),
              createdAt: new Date()

          });

  Historypro.insert({
            timehour: $("#aHour").val(),
               timeminute: $("#aMinute").val(),
                timesecond: $("#aSecond").val(),
              dateproject: $("#startdateproject").val(),
              subproject: $("#subjetcodeproject").val(),
              desproject: $("#descriptiveproject").val(),
              messagesproject: $("#messagesproject").val(),
              createdAt: new Date()

          });


   Router.go("project");



      return false;


}
}
);

Template.addproject.onRendered(function() {
   $(document).ready(function() {
    $('select').material_select();
  });     
});