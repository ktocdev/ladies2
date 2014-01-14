Backbone.View.prototype.close = function() {
  console.log( 'Closing view ' + this );
 
  if ( this.beforeClose ) {
    this.beforeClose();
  }
 
  this.remove(); 
  this.off();

}

var AppRouter = Backbone.Router.extend({

  routes: {
      ""                      : "list",
      "artists/:id"           : "artistDetailView"//,
      //"artists/:name/bio"     : "artist-bio-view",
      //"artists/:name/voice"   : "artist-voice-view",
      //"artists/:name/music"   : "artist-music-view",
      //"artists/:name/love"    : "artist-love-view",
  },

  initialize: function () {

  },

  list: function() {
    console.log('list');
    
  },

  artistDetailView: function (_id) {
    var artistDetail = artists.get(_id);

    //var artistDetailView = new ArtistDetailView({
    //  model : artistDetail
    //}); 

    this.showView('#artist-detail-container', new ArtistDetailView({
      model: artistDetail
    })); 

    this.showView('#nav', new NavView({
      model: artistDetail
    }));   

  },

  showView: function (selector, view) {

    // we should only call close when we hit the 'close' button of the artist detail view
    // we will never really be able to switch between artists like we are now
    // keeping this around for when we need it

    if (this.currentView){
      //this.currentView.close();
    } 

    $(selector).html(view.render());
    this.currentView = view;
   
    return view;
  }

});

//utils.loadTemplate(['HeaderView', 'WineView', 'WineListItemView', 'AboutView'], function() {
  app = new AppRouter();
  Backbone.history.start();
// });




