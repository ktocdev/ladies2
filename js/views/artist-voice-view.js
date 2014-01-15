var ArtistVoiceView = Backbone.View.extend({
  template: _.template($("#artist-voice-template").html()),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  	return this.el;
  }

});