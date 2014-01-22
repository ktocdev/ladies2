TemplateManager = {
  templates: {},
  promises: {},
  get: function(id, callback){
    var that = this;
    var template = this.templates[id];

    if (template) {
      callback(template);
    } else {
      var url = "tpl/" + id + ".html";
      var promise = $.trafficCop(url);
      promise.done(function(template){
        that.templates[id] = template;
        callback.call(this, template);
      });
    }
  }
}

