var ArtistView = Backbone.View.extend({
  className: "col-container",
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
    var view = this;
    $.when(this.$el.append(html(_.extend(this.model.toJSON())))).then(function() {
      view.setElement($(".col"));
    });
  }

});