var ArtistView = Backbone.View.extend({
  className: "artist",
  template: _.template($("#artist-template").html()),
  render: function () {
    this.$el.append(this.template(_.extend(this.model.toJSON())));
  	return this.el;
  }
});