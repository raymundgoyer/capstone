Template.quiz.helpers({
  alarmquiz: function () {
      return Alarmquiz.find({},{sort:{createdAt: -1}, limit: 10})
  }

});

Template.addquiz.onRendered(function () {
  
     $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

});

Template.quiz.events({
  'click #deletequiz': function()
    {
      Alarmquiz.remove(this._id);
    }

});



Template.addquiz.events({

 'click [data-action="load"]': function (event) {
          Alarmquiz.insert({
              timequiz: $("#input_starttime").val(),
              indatequiz: $("#datequiz").val(),
              subquiz: $("#subjectquiz").val(),
              desquiz:$("#descriptivequiz").val(),
              messagesquiz: $("#messagequiz").val(),
              createdAt: new Date()

          });
        Historyquiz.insert({
            timequiz: $("#input_starttime").val(),
              indatequiz: $("#datequiz").val(),
              subquiz: $("#subjectquiz").val(),
              desquiz:$("#descriptivequiz").val(),
              messagesquiz: $("#messagequiz").val(),
              createdAt: new Date()

          });



   Router.go("quiz");


      return false;




}
}
);

