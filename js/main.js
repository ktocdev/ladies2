var AppRouter = Backbone.Router.extend({
  routes: {
    ""                             : "artistLink",
    "artists(/)"                   : "artistLink",
    "artists/:path(/)"             : "artistDetailView",
    "artists/:path/:section(/)"    : "artistDetailView"
  },

  initialize: function () {
    this.showView('#artist-list-container', new ArtistsListView({
      collection: artists
    }));
    this.showView('#about-container', new AboutView({
      model: about
    }));
  },

  artistDetailView: function (path, section) {

    var artistDetail = artists.get(path);

    this.showView('#artist-detail-container', new ArtistDetailView({
      model: artistDetail
    }));
    this.showView('#artist-detail-section', new ArtistBioView({
      model: artistDetail
    }));
    this.showNav(section, '#nav', new NavView({
      model: artistDetail
    }));

    switch (section) {
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

  showView: function (selector, view ) {
    view.render(selector);
  }

  showNav: function (section, selector, view ){
    view.render(selector, section);
  },

});

app = new AppRouter();
Backbone.history.start();
