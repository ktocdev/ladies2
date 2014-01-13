var AlbumsListView = Backbone.View.extend({
  renderAlbumView: function(album) {
    // Create a new AlbumView
    var albumView = new AlbumView({
      model : album
    });
    // Append it to the albums ul that is part
    // of the view
    this.$el.append(albumView.el);
    albumView.render();
  },
  render: function () {
    var thisView = this;
    // Iterate over each Album Model
    _.each(this.collection.models, function (album) {
      // Call the renderAlbumView method
      thisView.renderAlbumView(album);
    });
  }
});