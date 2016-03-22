Template.notes.events({
  "click .addsubject": function() {
    $('#addsubjectModal').openModal();
  }
});



Template.notes.events({
  //view tourna
  "click #display":function(event){
      event.preventDefault();
      Router.go('takenote',{room_id:this._id});
  },


});

Template.notes.events({
  'click #delete': function()
    {
      Subject.remove(this._id);
    }

});

Template.notes.helpers({
  "note": function() {
    return Subject.find({});
  }
});

Template.addsubjectModal.events({
  "click .btn": function() {
    var subinfo = $("#subject").val();
    var sim = $("#simester").val();
    Subject.insert({
      "subinfo": subinfo
    }, function() {
      $('#addsubjectModal').closeModal();

      // if (sim == ('First Simester'))

        


    });
  }
});

