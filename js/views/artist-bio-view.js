var ArtistBioView = Backbone.View.extend({
  template: _.template($("#artist-bio-template").html()),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  	return this.el;
  }

});