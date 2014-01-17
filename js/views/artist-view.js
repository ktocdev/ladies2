var ArtistView = Backbone.View.extend({
  className: "artist",
  template: "ArtistView",

  initialize: function () {

  },

  render: function () {
  	var that = this;
    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html)
    });

  },

  renderView: function(html){
  	this.$el.append(html(_.extend(this.model.toJSON())));
    return this;
  }

});