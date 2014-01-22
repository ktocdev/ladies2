var ArtistsListView = Backbone.View.extend({
  el: "#artist-list-container",

  initialize: function () {

  },

  renderArtistView: function(artist) {
    // Create a new artistView
    var artistView = new ArtistView({
      model : artist
    });
    // Append it to the container
    this.$el.append(artistView.el);
    artistView.render();
  },

  render: function () {
    var that = this;
    // Iterate over each artist Model
    _.each(this.collection.models, function (artist) {
      // Call the renderArtistView method
      that.renderArtistView(artist);
    });

  }
  
});