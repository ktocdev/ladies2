var ArtistDetailView = Backbone.View.extend({
	//el: "#artist-detail-container",
  className: "artist-detail",
  template: "ArtistDetailView",

  initialize: function () {

  },

  render: function () {
    //var rendered_html = render(this.template, {});
    //this.$el.append(rendered_html(_.extend(this.model.toJSON())));
    //return this.el;
  },

  events: {
    "click .close-btn"   : "close"
  }

});