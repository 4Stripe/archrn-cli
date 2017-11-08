'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _pkgVersions = require('pkg-versions');

var _pkgVersions2 = _interopRequireDefault(_pkgVersions);

var _Package = require('./Package');

var _Package2 = _interopRequireDefault(_Package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PackageVersions = function () {
  function PackageVersions(name) {
    (0, _classCallCheck3.default)(this, PackageVersions);

    this.name = name;
    this.versions = [];
  }

  (0, _createClass3.default)(PackageVersions, [{
    key: 'resolveVersions',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this = this;

        var versions;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _pkgVersions2.default)(this.name);

              case 2:
                versions = _context.sent;

                this.versions = (0, _from2.default)(versions).map(function (version) {
                  return new _Package2.default(_this.name, version);
                });
                _context.next = 6;
                return _promise2.default.all(this.versions.map(function (pkg) {
                  return pkg.resolveDependencies();
                }));

              case 6:
                return _context.abrupt('return', true);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function resolveVersions() {
        return _ref.apply(this, arguments);
      }

      return resolveVersions;
    }()
  }, {
    key: 'dependsOn',
    value: function dependsOn(packageToUpdate) {
      return this.versions.length ? this.versions.some(function (pkg) {
        return pkg.dependsOn(packageToUpdate);
      }) : false;
    }
  }]);
  return PackageVersions;
}();

exports.default = PackageVersions;