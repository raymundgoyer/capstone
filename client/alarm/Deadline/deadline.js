Template.deadline.helpers({
  alarmexam: function () {
      return Alarmexam.find({},{sort:{createdAt: -1}, limit: 10})
  }

});