var NavView = Backbone.View.extend({
  className: "nav-container",
  template: "NavView",

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
    $(selector).append(html(_.extend(this.model.toJSON())));
    return this;
  }

  /*selectMenuItem: function (menuItem) {
    $('.nav li').removeClass('active');
    if (menuItem) {
      $('.' + menuItem).addClass('active');
    }
  }*/

});