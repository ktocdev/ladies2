var ArtistLoveView = Backbone.View.extend({
  template: _.template($("#artist-love-template").html()),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    console.log(this.el)
  	return this.el;
  }

});