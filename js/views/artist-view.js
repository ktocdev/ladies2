var ArtistView = Backbone.View.extend({
  className: "artist",
  template: _.template($("#artist-template").html()),
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
    this.$el.empty();
    //  Extend the object to contain both Artist attributes
    this.$el.append(this.template(_.extend(this.model.toJSON()
   )));
   // Render the albums for each Artist
   this.renderAlbums();
  }
});