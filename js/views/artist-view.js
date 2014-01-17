var ArtistView = Backbone.View.extend({
  className: "artist",
  template: "ArtistView",

   initialize: function () {

  },

  render: function () {
  	var data = renderTemplate(this.template);
  	data = _.template(data);
    this.$el.append(data(_.extend(this.model.toJSON())));
  	return this.el;
  }

});