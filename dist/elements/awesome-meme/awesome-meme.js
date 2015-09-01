'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var AwesomeMeme = (function () {
  function AwesomeMeme() {
    _classCallCheck(this, AwesomeMeme);
  }

  _createClass(AwesomeMeme, [{
    key: 'beforeRegister',
    value: function beforeRegister() {
      this.is = 'awesome-meme';
      this.properties = {
        top: {
          type: String,
          value: ''
        },
        bottom: {
          type: String,
          value: ''
        }
      };
    }
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'ready',
    value: function ready() {
      this.top = this.top.toUpperCase();
      this.bottom = this.bottom.toUpperCase();
    }
  }, {
    key: 'attached',
    value: function attached() {}
  }, {
    key: 'detached',
    value: function detached() {}
  }, {
    key: 'attributeChanged',
    value: function attributeChanged() {}
  }]);

  return AwesomeMeme;
})();

Polymer(AwesomeMeme);