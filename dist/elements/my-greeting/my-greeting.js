'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MyGreeting = (function () {
  function MyGreeting() {
    _classCallCheck(this, MyGreeting);
  }

  _createClass(MyGreeting, [{
    key: 'beforeRegister',
    value: function beforeRegister() {
      this.is = 'my-greeting';
      this.properties = {
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

Polymer(MyGreeting);