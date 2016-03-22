Template.camerasubject.events({
  "click .addcamera": function() {
    $('#addcameraModal').openModal();
  }
});



Template.camerasubject.events({
  
  "click #displaycam":function(event){
      event.preventDefault();
      Router.go('takephoto',{cam_id:this._id});
  },


});

Template.camerasubject.events({
  'click #deletecam': function()
    {
      Camera.remove(this._id);
    }

});

Template.camerasubject.helpers({
  "camera": function() {
    return Camera.find({});
  }
});

Template.addcameraModal.events({
  "click #camerabtn": function() {
    var caminfo = $("#camera").val();
    Camera.insert({
      "caminfo": caminfo
    }, function() {
      $('#addcameraModal').closeModal();
    });
  }
});