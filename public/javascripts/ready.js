document.addEventListener("WebComponentsReady", function() {
  $.get('/data', function(data) {
    var files = JSON.parse(data);
    files.forEach(function(file) {
      $.getJSON(file, function(data) {
        var component = data.component;
        var parent = data.parent;
        data.data.forEach(function(d) {
          var object = document.createElement(component);
          $(parent).append(object);
          object.initialize(d);
        });
      });
    });
  });
});
