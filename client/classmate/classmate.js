// Template.classmate.onCreated(function() {
//   this.subscribe("profile");
//   this.subscribe("classmate");  
//   Session.setDefault("profileId",this.profile_id);

// });



Template.classmate.events({
  'click #class': function() {
    $('#addclassmateModal').openModal();
  }
});




  // Template.addclassmateModal.helpers({
  //   profile: function() {
  //     return Profile.find({}, {
  //       sort: {
  //         time: -1
  //       }
  //     });
  //   }
  // });


if (Meteor.isClient) {
  Template.addclassmateModal.events({
    'click #classbtn': function() {
        var fname = $("#first_name").val();
  var lname = $("#last_name").val();
  var contact = $("#contact").val();
  var mon = $("#month").val();
  var da = $("#day").val();
  var yea = $("#year").val();
  var add = $("#address").val();

      return MeteorCamera.getPicture({}, function(e, a) {
        if (e != null) {
          return alert(e.message);
        } else {
          return Profile.insert({

            time: new Date(),
            classpic: a,
              fname:fname,
              lname: lname,
              contact: contact,
              mon: mon,
              da: da,
              yea:yea,
              add: add,
           
          });

    $("#month").val("");
    $("#year").val("");
    $("#day").val("");




        }
      });
    }
  });
 
}


Template.addclassmateModal.events({
  'click #classbtn' :  function() {
      $('#addclassmateModal').closeModal();
    }
  });


  Template.classmate.helpers({
    profile: function() {
      return Profile.find({}, {
        sort: {
          time: -1
        }
      });
    }
  });
Template.classmate.events({
  'click #deleteclass': function()
    {
      Profile.remove(this._id);

    }
});
// Template.campic.events({
//   'click #deleteclass': function()
//     {
//       Profile.remove(this._id);
     
//     }

// });





// Template.addclassmateModal.events({

//  'click #classbtn': function () {
//   var fname = $("#first_name").val();
//   var lname = $("#last_name").val();
//   var contact = $("#contact").val();
//   var mon = $("#month").val();
//   var da = $("#day").val();
//   var yea = $("#year").val();
//   var add = $("#address").val();
//           Classmate.insert({
//               fname:fname,
//               lname: lname,
//               contact: contact,
//               mon: mon,
//               da: da,
//               yea:yea,
//               add: add,
//               createdAt: new Date()

//           }, 


//           );

//         Router.go("classmate");

//     $("#month").val("");
//     $("#year").val("");
//     $("#day").val("");

//       return false;


// }
// });


Template.classmate.onRendered(function() {
    $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
        
});


// // Template.campic.onCreated(function(){
// //   this.subscribe("profiles");
// // });


// Template.campic.events({
//   "change #profile_photo": function (event){
//     var profile = Profile.findOne({"metadata.owner": Meteor.userId()});
//     if(profile){
//       Profile.remove(profile._id);
//       FS.Utility.eachFile(event, function(file) {
//         var newFile = new FS.File(file);
//         newFile.metadata = {owner: Meteor.userId()};
//         Profile.insert(newFile, function (err, fileObj) {

//         });
//       });
//     }else{

//       // FS.Utility.eachFile(event, function(file) {
//       //   var newFile = new FS.File(file);
//       //   newFile.metadata = {owner: Meteor.userId()};
//       //   Profile.insert(newFile, function (err, fileObj) {
//       //     console.log(err);
//       //   });
//       // });
//     }

//   }
// });

// Template.campic.helpers({
//   profile: function(){
//     var profile = Profile.findOne({"metadata.owner": Meteor.userId()});
//     if(profile){
//       return profile;
//     }
//     return [];
//   }
// });
