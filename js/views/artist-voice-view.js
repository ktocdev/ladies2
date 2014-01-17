var ArtistVoiceView = Backbone.View.extend({
  template: "ArtistVoiceView",

  initialize: function () {

  },

  render: function () {
    var data = renderTemplate(this.template);
  	data = _.template(data);
    this.$el.append(data(_.extend(this.model.toJSON())));
  	return this.el;
  }

});
