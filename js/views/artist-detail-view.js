var ArtistDetailView = Backbone.View.extend({
	//el: "#artist-detail-container",
  className: "artist-detail",
  template: _.template($("#artist-detail-template").html()),

  initialize: function () {
    this.render();
  },

  render: function () {
  	console.log('artistDetailView render');
  	this.$el.empty();
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});