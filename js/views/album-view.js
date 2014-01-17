var AlbumView = Backbone.View.extend({
  tagName: "li",
  className: "album",
  template: "AlbumView",

  initialize: function () {

  },

  render: function () {
    var data = renderTemplate(this.template);
  	data = _.template(data);
    this.$el.append(data(_.extend(this.model.toJSON())));
  	return this.el;
  }

});