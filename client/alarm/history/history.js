Template.history.helpers({
  historyass: function () {
      return Historyass.find({},{sort:{createdAt: -1}, limit: 10})
  }

});
Template.history.helpers({
  historypro: function () {
      return Historypro.find({},{sort:{createdAt: -1}, limit: 10})
  }

});
Template.history.helpers({
  historyquiz: function () {
      return Historyquiz.find({},{sort:{createdAt: -1}, limit: 10})
  }

});
Template.history.helpers({
  historyexam: function () {
      return Historyexam.find({},{sort:{createdAt: -1}, limit: 10})
  }

});
Template.history.events({
  'click #deletehistoryass': function()
    {
      Historyass.remove(this._id);
    }

});
Template.history.events({
  'click #deletehistorypro': function()
    {
      Historypro.remove(this._id);
    }

});
Template.history.events({
  'click #deletehistoryquiz': function()
    {
      Historyquiz.remove(this._id);
    }

});
Template.history.events({
  'click #deletehistoryexam': function()
    {
      Historyexam.remove(this._id);
    }

});
Template.history.onRendered(function() {
  
  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
        
});



        
