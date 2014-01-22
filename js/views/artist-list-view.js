var ArtistsListView = Backbone.View.extend({

  initialize: function () {

  },

  renderArtistView: function(artist,selector) {
    var artistView = new ArtistView({
      model : artist
    });
    $(selector).append(artistView.el);
    artistView.render(selector);
  },

  render: function (selector) {
    var that = this;
    _.each(this.collection.models, function (artist) {
      that.renderArtistView(artist,selector);
    });

  }

});