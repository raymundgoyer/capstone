Router.configure({
  layoutTemplate: "app"
});
Router.map(function() {
  this.route('pleaseLogin', {path: '/'});
   this.route('notes');
  this.route('alarm');
 this.route('project');
 this.route('addassignment');
 this.route('addquiz');
 
 this.route('addexam');
 this.route('quiz');
 this.route('assignment');
 this.route('exam');
 this.route('addnotes');
  this.route('classmate');
    this.route('history');
    this.route('schedule');
    this.route('addclassmate');
    this.route('camerasubject');
       this.route('alarmtime');
         this.route('deadline');

 this.route('addproject',{
  data: function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
    
  }

 }); 
  
this.route('takephoto',{
path: '/camerasubject/takephoto/:cam_id',
data: function() {
      return {cam_id: this.params.cam_id};
},
});



    this.route('takenote', {
   path: '/notes/takenote/:room_id',
   data: function() {
           return {room_id: this.params.room_id};
   },
  
   });
  });


