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
      ""                          : "list",
      "artists/:path"             : "artistDetailView",
      "artists/:path/:section"    : "artistDetailSectionView",
      //"artists/:path/:voice"    : "artistVoiceView",
      //"artists/:path/:music"    : "artistMusicView",
      //"artists/:path/:love"     : "artistLoveView",
  },

  initialize: function () {

  },

  list: function() {
    console.log('list');
    
  },

  artistDetailView: function (path) {

    var artistDetail = artists.get(path);

    this.showView('#artist-detail-container', new ArtistDetailView({
      model: artistDetail
    })); 

    this.showView('#nav', new NavView({
      model: artistDetail
    }));   

  },

  artistDetailSectionView: function (path, section) {
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




