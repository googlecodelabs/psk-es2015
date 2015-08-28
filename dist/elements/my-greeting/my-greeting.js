'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MyGreeting = (function () {
  function MyGreeting() {
    _classCallCheck(this, MyGreeting);
  }

  _createClass(MyGreeting, [{
    key: 'is',
    get: function get() {
      return 'my-greeting';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        greeting: {
          type: String,
          value: 'Welcome!',
          notify: true
        }
      };
    }
  }]);

  return MyGreeting;
})();

Polymer(MyGreeting.prototype); // jshint ignore:line