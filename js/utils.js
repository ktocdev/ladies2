TemplateManager = {
  templates: {},
  get: function(id, callback){
    var that = this;
    var template = this.templates[id];
    if (template) {
      callback(template);
    } else {
      $.get("tpl/" + id + ".html", function(template){
        that.templates[id] = template;
        callback(template);
      })
    }
  }
}
