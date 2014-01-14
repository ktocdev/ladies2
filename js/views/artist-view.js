var ArtistView = Backbone.View.extend({
  className: "artist",
  template: _.template($("#artist-template").html()),
  render: function () {
    //  Extend the object to contain both Artist attributes
    this.$el.append(this.template(_.extend(this.model.toJSON())));
  }
});