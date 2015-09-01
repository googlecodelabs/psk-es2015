'use strict';

suite('my-list tests', function () {
  var list, listItems;
  setup(function () {
    list = fixture('basic');
  });
  test('Item lengths should be equalled', function (done) {
    // Test a property
    // TODO: Fix list.items.push('Foo') causing a WeakMap exception
    // Invalid value used as weak map key
    list.items = ['Responsive Web App boilerplate', 'Iron Elements and Paper Elements', 'End-to-end Build Tooling (including Vulcanize)', 'Unit testing with Web Component Tester', 'Routing with Page.js', 'Offline support with the Platinum Service Worker Elements'];
    // Data bindings will stamp out new DOM asynchronously
    // so wait to check for updates
    flush(function () {
      listItems = list.querySelectorAll('li');
      assert.equal(list.items.length, listItems.length);
      done();
    });
  });
});