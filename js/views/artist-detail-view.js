var ArtistDetailView = Backbone.View.extend({
	el: "#artist-detail-container",
  className: "artist-detail",
  template: _.template($("#artist-detail-template").html()),

  initialize: function () {

  },

  renderNavView: function () {
  	this.navView = new NavView();
    $('#nav').html(this.navView.el);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    //console.log(this.$el);
    //this.renderNavView();
  }

});