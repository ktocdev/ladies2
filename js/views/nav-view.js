var NavView = Backbone.View.extend({
  className: "nav-container",
  template: "NavView",

  initialize: function () {

  },

  render: function (selector, section) {
    var that = this;
    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html, selector, section)
    });
  },

  renderView: function(html, selector, section){
    $(selector).append(html(_.extend(this.model.toJSON())));
    this.selectNav(section);
    return this;
  },

  selectNav: function (section) {
    if (!section){
      section = 'bio';
    }
    $('.artist-detail-nav a').removeClass('active');
    $('.artist-detail-nav .' + section + ' a').addClass('active');
  }

});