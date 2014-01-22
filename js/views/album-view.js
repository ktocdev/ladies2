var AlbumView = Backbone.View.extend({
  tagName: "li",
  className: "album",
  template: "AlbumView",

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
  }

});