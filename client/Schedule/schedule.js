Template.schedule.events({
  "click .addschedule": function() {
    $('#addscheduleModal').openModal();
  }
});



Template.schedule.helpers({
  scheduled: function () {
      return Sched.find({},{sort:{createdAt: -1}, limit: 10})
  }

});

Template.schedule.events({
  'click #deletesched': function()
    {
     	Sched.remove(this._id);
    }

});


Template.addscheduleModal.events({

 'click #schedbtn': function () {
  var schedsub = $("#schedsubject").val();
  var schedtitle = $("#scheddestitle").val();
  var schedrom = $("#schedroom").val();
  var scehdrombuilding = $("#schedroombuild").val();
  var schedteacher = $("#teacher").val();
  var schedtimeout = $("#timeout").val();
  var schedtimein = $("#timein").val();
  var schedmwf = $("#mwf").val();
  var schedtth = $("#tth").val();
          Sched.insert({
              schedsub:schedsub,
              schedtitle:schedtitle,
              schedrom:schedrom,
              scehdrombuilding: scehdrombuilding,
              schedteacher:schedteacher,
              schedtimeout:schedtimeout,
              schedtimein: schedtimein,
              schedmwf:schedmwf,
              schedtth:schedtth,
              createdAt: new Date()
          }, function() {
      $('#addscheduleModal').closeModal();
    }
          );
    $("#timein").val("");
    $("#timeout").val("");
   

      return false;

}
});



