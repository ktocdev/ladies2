var ArtistDetailView = Backbone.View.extend({
	//el: "#artist-detail-container",
  className: "artist-detail",
  template: _.template($("#artist-detail-template").html()),

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  	return this.el;
  },

  events: {
    "click .close-btn"   : "close"
  }

});