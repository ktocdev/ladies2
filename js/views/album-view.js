var AlbumView = Backbone.View.extend({
  tagName: "li",
  className: "album",
  template: _.template($("#album-template").html()),
  render: function () {
    this.$el.empty();
    this.$el.append(this.template(this.model.toJSON()));
  }
});