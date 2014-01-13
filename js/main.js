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
    console.log('artistDetailView');

    var artistDetailView = new ArtistDetailView({_id: _id});
    artistDetailView.get({success: function(){
      $("#artist-detail-container").html(new ArtistDetailView({model: artist}).el);
    }});

  }

});

//utils.loadTemplate(['HeaderView', 'WineView', 'WineListItemView', 'AboutView'], function() {
  app = new AppRouter();
  Backbone.history.start();
// });


