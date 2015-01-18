var $ = require('jquery');
var foo = require('./foo');

$(function () {
  $(document.body).html("<h1>Foo</h1>");
  foo();
})
