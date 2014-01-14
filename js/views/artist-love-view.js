var ArtistLoveView = Backbone.View.extend({
  el: "#artist-detail-section",
  template: _.template($("#artist-love-template").html()),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  }

});