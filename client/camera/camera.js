Template.camerasubject.onCreated(function () {
  this.subscribe("pictures");
  this.subscribe("camera");
  Session.setDefault("camID",this.cam_id);
  Session.setDefault("capID",this.cap_id);
})
Template.takephoto.events({
  "click .cameraadd": function() {
    $('#Modal').openModal();
  }
});


Template.Modal.events({
  'click #captionbtn': function() {
    var capinfo = $("#cap").val();
    myColl.insert({
      "capinfo": capinfo
    }, function() {
      $('#Modal').closeModal();
       $("#cap").val("");
    });
  }
});

if (Meteor.isClient) {
  Template.Modal.events({
    'click #captionbtn': function() {
      var dacamId = this.cam_id;
      var dacapId = this.cam_id;
      var capinfo = $("#cap").val();
      return MeteorCamera.getPicture({}, function(e, r) {
        if (e != null) {
          return alert(e.message);
        } else {
          return myColl.insert({
            camID:dacamId,
            capID:dacapId,
            time: new Date(),
            pic: r,
            capinfo:capinfo

          });


        }
      });
    }
  });
  Template.takephoto.helpers({
    pictures: function() {
      return myColl.find({camID:this.cam_id},{capID:this.cap_id}, {
        sort: {
          time: -1
        }
      });
    }
  });
}

Template.takephoto.events({
  'click #deletephoto': function()
    {
      myColl.remove(this._id);
    }

});