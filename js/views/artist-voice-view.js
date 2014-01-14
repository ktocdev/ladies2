var ArtistVoiceView = Backbone.View.extend({
  el: "#artist-detail-section",
  template: _.template($("#artist-voice-template").html()),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  }

});