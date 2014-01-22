var ArtistsListView = Backbone.View.extend({

  initialize: function () {

  },

  renderArtistView: function(artist,selector) {
    // Create a new artistView
    var artistView = new ArtistView({
      model : artist
    });
    // Append it to the container
    $(selector).append(artistView.el);
    artistView.render(selector);
  },

  render: function (selector) {
    var that = this;
    // Iterate over each artist Model
    _.each(this.collection.models, function (artist) {
      // Call the renderArtistView method
      that.renderArtistView(artist,selector);
    });

  }

});