Template.exam.helpers({
  alarmexam: function () {
      return Alarmexam.find({},{sort:{createdAt: -1}, limit: 10})
  }

});

Template.addexam.onRendered(function () {
  
     $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

});


Template.exam.events({
  'click #deletexam': function()
    {
      Alarmexam.remove(this._id);
    }

});



Template.addexam.events({

 'click #exambtn': function (event) {
          Alarmexam.insert({
              timexam: $("#input_starttime").val(),
              datexam: $("#startdateexam").val(),
              subexam: $("#subjectexam").val(),
              desexam: $("#descriptiveexam").val(),
              messageexam:$("#messagesexam").val(),
              time: new Date()

          });

 Historyexam.insert({
            timexam: $("#input_starttime").val(),
              datexam: $("#startdateexam").val(),
              subexam: $("#subjetcodexam").val(),
              desexam: $("#descriptiveexam").val(),
              messageexam: $("#messagesexam").val(),
              time: new Date()

          });


   Router.go("exam");

      return false;


}
}
);

