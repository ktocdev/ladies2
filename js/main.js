var AppRouter = Backbone.Router.extend({
  routes: {
    ""                             : "artistLink",
    "artists(/)"                   : "artistLink",
    "artists/:path(/)"             : "artistDetailView",
    "artists/:path/:section(/)"    : "artistDetailSectionView"   
  },

  initialize: function () {
    this.showView('#container', new ArtistsListView({
      collection: artists
    })); 
  },

  artistDetailView: function (path) {
    var artistDetail = artists.get(path);
    
    this.showView('#artist-detail-container', new ArtistDetailView({
      model: artistDetail
    })); 
    this.showView('#nav', new NavView({
      model: artistDetail
    }));  
    this.showView('#artist-detail-section', new ArtistBioView({
      model: artistDetail
    }));

  },

  artistDetailSectionView: function (path, section) {
    this.artistDetailView(path);
    var artistDetail = artists.get(path),
        artistViewSection = section;
    switch (artistViewSection) {
      case 'bio':
        this.showView('#artist-detail-section', new ArtistBioView({
          model: artistDetail
        })); 
      break;
      case 'voice':
        this.showView('#artist-detail-section', new ArtistVoiceView({
          model: artistDetail
        })); 
      break;
      case 'music':
        this.showView('#artist-detail-section', new ArtistMusicView({
          model: artistDetail
        }));
      break;
      case 'love':
        this.showView('#artist-detail-section', new ArtistLoveView({
          model: artistDetail
        }));
      break;
      default:
        this.showView('#artist-detail-section', new ArtistBioView({
          model: artistDetail
        })); 
      break;
    }
  },

  artistLink: function(){
    $("#artist-detail-container").empty();
  },

  showView: function (selector, view) {
    view.render(selector);
  }

});

app = new AppRouter();
Backbone.history.start();
