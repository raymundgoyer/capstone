Template.assignment.helpers({
  alarmassignment: function () {
      return Alarmassignment.find({},{sort:{createdAt: -1}, limit: 10})
  }

});
Template.addassignment.onRendered(function () {
  
     $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

});

Template.assignment.events({
  'click #deleteassignment': function()
    {
      Alarmassignment.remove(this._id);
    }

});



Template.addassignment.events({

 'click [data-action="load"]': function (event) {
          Alarmassignment.insert({
              assigntime: $("#input_starttime").val(),
              assigndate: $("#startdate").val(),
              assigntitle:$("#assigndestitle").val(),
              assignsub:$("#assignsubject").val(),
              assignmessages:$("#textarea1").val(),
              createdAt: new Date()



          });

      Historyass.insert({
              assigntime: $("#input_starttime").val(),
              assigndate: $("#startdate").val(),
              assigntitle:$("#assigndestitle").val(),
              assignsub:$("#assignsubject").val(),
              assignmessages:$("#textarea1").val(),
              createdAt: new Date()

          });


   Router.go("assignment");



      return false;


}



}
);

