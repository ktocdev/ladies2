/*function render(tmpl_name, tmpl_data) {
    if ( !render.tmpl_cache ) { 
        render.tmpl_cache = {};
    }

    if ( ! render.tmpl_cache[tmpl_name] ) {

        var tmpl_dir = 'tpl';
        var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';

        var tmpl_string;
        $.ajax({
            url: tmpl_url,
            method: 'GET',
            async: false,
            success: function(data) {
              tmpl_string = data;

            }
        });

        render.tmpl_cache[tmpl_name] = _.template(tmpl_string);
    }

    return render.tmpl_cache[tmpl_name](tmpl_data);
}*/


function renderTemplate(url) {
    var tmpl_dir = 'tpl';
    var url = tmpl_dir + '/' + url + '.html';

    var data = "<h1> failed to load url : " + url + "</h1>";
    $.ajax({
        async: false,
        dataType: "text",
        url: url,
        success: function(response) {
          data = response;
        }
    });
    return data;
}