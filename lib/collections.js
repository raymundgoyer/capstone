Chat = new Mongo.Collection("chat"),
PostDB = new Mongo.Collection('postDB'),
Alarmproject = new Mongo.Collection('alarmproject'),
Alarmassignment = new Mongo.Collection('alarmassignment'),
Alarmquiz = new Mongo.Collection('alarmquiz'),
Alarmexam = new Mongo.Collection('alarmexam'),
Alarmhistory = new Mongo.Collection('alarmhistory'),
Historyass = new Mongo.Collection('historyass'),
Historypro = new Mongo.Collection('historypro'),
Historyquiz = new Mongo.Collection('historyquiz'),
Historyexam = new Mongo.Collection('historyexam'),
Classmate = new Mongo.Collection('classmate'),
Subject = new Mongo.Collection('note'),
myColl = new Mongo.Collection ('pictures'),
Camera = new Mongo.Collection ('camera'),
Sched = new Mongo.Collection ('scheduled'),
Profile = new Mongo.Collection ('profile'),
Takenote = new Mongo.Collection('takenotes');


// var imageStore = new FS.Store.GridFS("profile");

// //Profile Photo Collection
// Profile = new FS.Collection("profile", {
//   stores: [imageStore]
// });

// //Allow insert, update, remove and download for Profile Photo Collection
// //always run it on Server
// if(Meteor.isServer){
//   Profile.allow({
//     'insert': function () {
//       return true;
//     },
//     'update': function () {
//       return true;
//     },
//     'remove': function () {
//       return true;
//     },
//     download: function(userId, fileObj) {
//         return true
//     }
//   });
// }
