Backbone.View.prototype.close = function(listitem) {
  console.log( 'Closing view ' + this );
 
  if ( this.beforeClose ) {
    this.beforeClose();
  }
 
  this.remove();
  this.unbind();
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

    var artistDetailView = new ArtistDetailView({
      model : artistDetail
    }); 

    //this.showView('#artist-detail-container', new ArtistDetailView({
    //  model: artistDetail
    //}));  

  },

  showView: function (selector, view) {
    console.log('show view')
    if (this.currentView) this.currentView.close();

    $(selector).html(view.render());
    this.currentView = view;
   
    return view;
  }

});

//utils.loadTemplate(['HeaderView', 'WineView', 'WineListItemView', 'AboutView'], function() {
  app = new AppRouter();
  Backbone.history.start();
// });




