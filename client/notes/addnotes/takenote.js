
Template.notes.onCreated(function() {
  this.subscribe("takenotes");
  this.subscribe("note");  
  Session.setDefault("roomId",this.room_id);
});

Template.takenote.helpers({
  "takenotes": function() {
    return Takenote.find({roomId:this.room_id},{sort:{'submittedOn':-1}});
  }
});



Template.takenote.events({

    'click #textareabutton':function(){
     var daroomId = this.room_id;
    var takeinfo = $("#textarea").val();
    Takenote.insert({
        takeinfo:takeinfo,
        roomId:daroomId,
            time: new Date(),
        
    });
    $("#textarea").val("");
    $("#textarea").clear;

return false;
        },

        'click #deletepost': function()
    {
      Takenote.remove(this._id);
    }

    
});


