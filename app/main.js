require.config({
  paths: {
    jquery: 'node_modules/jquery/dist/jquery'
  }
})

require(['jquery', 'foo'], function ($, foo) {
  $(document.body).html("<h1>Foo</h1>");
  foo();
})
