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

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _Package = require('./Package');

var _Package2 = _interopRequireDefault(_Package);

var _PackageVersions = require('./PackageVersions');

var _PackageVersions2 = _interopRequireDefault(_PackageVersions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Result = function Result(ok, err) {
  (0, _classCallCheck3.default)(this, Result);

  _initialiseProps.call(this);

  this.ok = ok;
  this.err = err;
};

Result.err = function (err) {
  return new Result(null, err);
};

Result.ok = function (ok) {
  return new Result(ok, null);
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.match = function (ifOk, ifErr) {
    if (_this3.err) {
      return ifErr(_this3.err);
    }
    return ifOk(_this3.ok);
  };
};

var DependencyGraph = function () {
  function DependencyGraph(dependencyMap) {
    var _this = this;

    (0, _classCallCheck3.default)(this, DependencyGraph);

    this.packagesToUpdate = function (packageToUpdate, version) {
      var packagesToUpdate = [];
      var unsupportedPackages = [];
      _this.dependencies.forEach(function (pkgVersions) {
        var foundPackageVersion = void 0;
        pkgVersions.versions.forEach(function (pkg) {
          var packageToLookFor = pkg.dependencies.find(function (dep) {
            return dep.name === packageToUpdate;
          });
          if (packageToLookFor) {
            var acceptedRange = _semver2.default.validRange(packageToLookFor.version);
            if (acceptedRange) {
              var isOnTheRange = _semver2.default.satisfies(version, acceptedRange);
              if (isOnTheRange) {
                foundPackageVersion = pkg.copy();
              }
            }
          }
        });
        if (foundPackageVersion) {
          packagesToUpdate.push(foundPackageVersion);
        } else {
          unsupportedPackages.push(pkgVersions.versions[pkgVersions.versions.length - 1].copy());
        }
      });
      if (unsupportedPackages.length) {
        return Result.err(unsupportedPackages);
      }
      return Result.ok(packagesToUpdate);
    };

    this.dependencyMap = dependencyMap;
  }

  (0, _createClass3.default)(DependencyGraph, [{
    key: 'resolveDependencyGraph',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.dependencies = (0, _from2.default)(this.dependencyMap.keys()).map(function (packageName) {
                  return new _PackageVersions2.default(packageName);
                });
                _context.next = 3;
                return _promise2.default.all(this.dependencies.map(function (pkgVersion) {
                  return pkgVersion.resolveVersions();
                }));

              case 3:
                return _context.abrupt('return', true);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function resolveDependencyGraph() {
        return _ref.apply(this, arguments);
      }

      return resolveDependencyGraph;
    }()
  }, {
    key: 'removePackagesWithout',
    value: function removePackagesWithout(packageToUpdate) {
      var _this2 = this;

      var newDependencies = [];
      this.dependencies.forEach(function (pkgVersion) {
        if (pkgVersion.dependsOn(packageToUpdate)) {
          newDependencies.push(pkgVersion);
        } else {
          _this2.dependencyMap.delete(pkgVersion.name);
        }
      });
      this.dependencies = newDependencies;
    }
  }]);
  return DependencyGraph;
}();

exports.default = DependencyGraph;