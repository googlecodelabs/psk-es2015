'use strict';

window.addEventListener('WebComponentsReady', function () {

  // We use Page.js for routing. This is a Micro
  // client-side router inspired by the Express router
  // More info: https://visionmedia.github.io/page.js/
  page('/', function () {
    return app.route = 'home';
  });

  page('/users', function () {
    return app.route = 'users';
  });

  page('/users/:name', function (data) {
    app.route = 'user-info';
    app.params = data.params;
  });

  page('/contact', function () {
    return app.route = 'contact';
  });

  // add #! before urls
  page({
    hashbang: true
  });
});