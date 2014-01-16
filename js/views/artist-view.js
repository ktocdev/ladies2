var ArtistView = Backbone.View.extend({
  className: "artist",
  template: "ArtistView",

  render: function () {
	
  	var rendered_html = render(this.template, {});
  	console.log(rendered_html)
    this.$el.append(rendered_html(_.extend(this.model.toJSON())));
  	return this.el;
  }

});