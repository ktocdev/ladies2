var ArtistVoiceView = Backbone.View.extend({
  template: "ArtistVoiceView",

  initialize: function () {
    this.render();
  },

  render: function () {
    var rendered_html = render(this.template, {});
    this.$el.append(rendered_html(_.extend(this.model.toJSON())));
  	return this.el;
  }

});
