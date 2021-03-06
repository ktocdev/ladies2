var ArtistLoveView = Backbone.View.extend({
  template: "ArtistLoveView",

  initialize: function () {

  },

  render: function (selector) {    
    var that = this;
    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html,selector)
    });
  },

  renderView: function(html,selector){
    $(selector).html(html(_.extend(this.model.toJSON())));
  }

});