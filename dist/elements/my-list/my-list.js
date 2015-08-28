'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MyList = (function () {
  function MyList() {
    _classCallCheck(this, MyList);
  }

  _createClass(MyList, [{
    key: 'ready',
    value: function ready() {
      this.items = ['Responsive Web App boilerplate', 'Iron Elements and Paper Elements', 'End-to-end Build Tooling (including Vulcanize)', 'Unit testing with Web Component Tester', 'Routing with Page.js', 'Offline support with the Platinum Service Worker Elements'];
    }
  }, {
    key: 'is',
    get: function get() {
      return 'my-list';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        items: {
          type: Array,
          notify: true
        }
      };
    }
  }]);

  return MyList;
})();

Polymer(MyList.prototype); // jshint ignore:line