var NavView = Backbone.View.extend({
  el: "#nav",
  className: "nav-container",
  template: "NavView",

  initialize: function () {

  },

  render: function () {
    var data = renderTemplate(this.template);
    data = _.template(data);
    this.$el.append(data(_.extend(this.model.toJSON())));
  }

  /*selectMenuItem: function (menuItem) {
    $('.nav li').removeClass('active');
    if (menuItem) {
      $('.' + menuItem).addClass('active');
    }
  }*/

});