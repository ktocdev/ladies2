var ArtistView = Backbone.View.extend({
  template: "ArtistView",
  tagName: "li",
  attributes : function () {
    return {
      class : this.model.get( 'colClass' )
    };
  },

  initialize: function () {

  },

  render: function () {
  	var that = this;
    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html);
    });
  },

  renderView: function(html){
    var view = this;
    this.$el.append(html(_.extend(this.model.toJSON())));
    this.el.attributes.class;
  }

});