var ArtistBioView = Backbone.View.extend({
  el: "#artist-detail-section",
  template: _.template($("#artist-bio-template").html()),

  initialize: function () {
    this.render();
  },

  render: function () {
  	console.log('test')
    this.$el.html(this.template(this.model.toJSON()));
  }

});