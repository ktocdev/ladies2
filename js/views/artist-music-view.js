var ArtistMusicView = Backbone.View.extend({
  template: "ArtistMusicView",

  initialize: function () {

  },

  renderAlbums: function() {
    var albumsListView = new AlbumsListView({
      // Albums collection on the Artist Model
      collection : this.model.albums,
      // Pass the container to which it is to be appended
      el : $('.albums', this.$el)
    });
    albumsListView.render();   
    
  },

  render: function () {
    var data = renderTemplate(this.template);
    data = _.template(data);
    this.$el.append(data(_.extend(this.model.toJSON())));
    this.renderAlbums();
    return this.el;    

  }

});