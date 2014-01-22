var ArtistView = Backbone.View.extend({
  className: "col-container",
  template: "ArtistView",
  tagName: "li",

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
    var view = this;
    this.$el.append(html(_.extend(this.model.toJSON())));
  }

});