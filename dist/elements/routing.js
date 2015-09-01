'use strict';

window.addEventListener('WebComponentsReady', function () {

  page.base('/psk-es2015/dist/');

  // We use Page.js for routing. This is a Micro
  // client-side router inspired by the Express router
  // More info: https://visionmedia.github.io/page.js/
  page('/', function () {
    app.route = 'home';
    app.scrollPageToTop();
  });

  page('/users', function () {
    app.route = 'users';
    app.scrollPageToTop();
  });

  page('/users/:name', function (data) {
    app.route = 'user-info';
    app.params = data.params;
    app.scrollPageToTop();
  });

  page('/contact', function () {
    app.route = 'contact';
    app.scrollPageToTop();
  });

  // add #! before urls
  page({
    hashbang: true
  });
});