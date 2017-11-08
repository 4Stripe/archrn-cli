'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _packageJson = require('package-json');

var _packageJson2 = _interopRequireDefault(_packageJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Package = function () {
  function Package(name, version) {
    (0, _classCallCheck3.default)(this, Package);

    this.name = name;
    this.version = version;
  }

  (0, _createClass3.default)(Package, [{
    key: 'resolveDependencies',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var currentPackage, dependencies;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _packageJson2.default)(this.name, {
                  version: this.version
                });

              case 2:
                currentPackage = _context.sent;
                dependencies = (0, _assign2.default)({}, currentPackage.dependencies || {}, currentPackage.devDependencies);

                this.dependencies = (0, _keys2.default)(dependencies || {}).map(function (key) {
                  return new Package(key, dependencies[key]);
                });
                return _context.abrupt('return', true);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function resolveDependencies() {
        return _ref.apply(this, arguments);
      }

      return resolveDependencies;
    }()
  }, {
    key: 'toString',
    value: function toString() {
      return this.name + '@' + this.version;
    }
  }, {
    key: 'getName',
    value: function getName() {
      return '' + this.name;
    }
  }, {
    key: 'dependsOn',
    value: function dependsOn(packageToUpdate) {
      return this.dependencies.length ? this.dependencies.some(function (pkg) {
        return pkg.getName() === packageToUpdate;
      }) : false;
    }
  }, {
    key: 'copy',
    value: function copy() {
      return new Package(this.name, this.version);
    }
  }]);
  return Package;
}();

exports.default = Package;