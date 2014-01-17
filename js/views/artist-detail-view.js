var ArtistDetailView = Backbone.View.extend({
	//el: "#artist-detail-container",
  className: "artist-detail",
  template: "ArtistDetailView",

  initialize: function () {

  },

  render: function () {
    var data = renderTemplate(this.template);
    data = _.template(data);
    this.$el.append(data(_.extend(this.model.toJSON())));
    return this.el;
  },

  events: {
    "click .close-btn"   : "close"
  }

});