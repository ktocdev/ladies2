var ArtistsListView = Backbone.View.extend({
  el: "#container",
  renderArtistView: function(artist) {
    // Create a new artistView
    var artistView = new ArtistView({
      model : artist
    });
    //console.log(artistView.el)
    // Append it to the container
    this.$el.append(artistView.el);
    console.log(this.$el)
    console.log(artistView.el)
    artistView.render();
  },
  render: function () {
    var thisView = this;
    // Iterate over each artist Model
    _.each(this.collection.models, function (artist) {
      // Call the renderArtistView method
      thisView.renderArtistView(artist);
    });
  }
});