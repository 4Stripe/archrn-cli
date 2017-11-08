'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _pkgVersions = require('pkg-versions');

var _pkgVersions2 = _interopRequireDefault(_pkgVersions);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _DependencyGraph = require('../lib/DependencyGraph');

var _DependencyGraph2 = _interopRequireDefault(_DependencyGraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(packageDefinition) {
    var _ref2, packageToUpdate, packageVersionList, _ref3, version, depsList, depsMap, dependencyGraph, updateResult;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _inquirer2.default.prompt([{
              type: 'list',
              name: 'packageToUpdate',
              message: 'Which package do you want to update?',
              choices: (0, _keys2.default)(packageDefinition.dependencies).map(function (key) {
                return {
                  name: key,
                  value: key
                };
              })
            }]);

          case 2:
            _ref2 = _context.sent;
            packageToUpdate = _ref2.packageToUpdate;

            console.log('Loading available versions of', packageToUpdate);
            _context.next = 7;
            return (0, _pkgVersions2.default)(packageToUpdate);

          case 7:
            packageVersionList = _context.sent;
            _context.next = 10;
            return _inquirer2.default.prompt([{
              type: 'list',
              choices: (0, _from2.default)(packageVersionList).reverse().map(function (pkgVersion) {
                return {
                  name: packageToUpdate + '@' + pkgVersion,
                  value: pkgVersion
                };
              }),
              name: 'version',
              message: 'Which version of ' + packageToUpdate + ' do you want to update to?'
            }]);

          case 10:
            _ref3 = _context.sent;
            version = _ref3.version;
            depsList = (0, _keys2.default)(packageDefinition.dependencies).map(function (dependency) {
              return [dependency, packageDefinition.dependencies[dependency]];
            }).filter(function (_ref4) {
              var _ref5 = (0, _slicedToArray3.default)(_ref4, 1),
                  dependency = _ref5[0];

              return dependency !== packageToUpdate;
            });
            depsMap = new _map2.default(depsList);
            dependencyGraph = new _DependencyGraph2.default(depsMap);

            console.log(_chalk2.default.blue('Building dependency graph...'));
            _context.next = 18;
            return dependencyGraph.resolveDependencyGraph();

          case 18:
            dependencyGraph.removePackagesWithout(packageToUpdate);
            updateResult = dependencyGraph.packagesToUpdate(packageToUpdate, version);

            updateResult.match(function (supportedPackages) {
              console.log('You can update to these packages');
              supportedPackages.forEach(function (pkg) {
                console.log(_chalk2.default.green(pkg.name + '@' + pkg.version));
              });
            }, function (unsupportedPackages) {
              console.log('Can not upgrade to ' + packageToUpdate + '@' + version + ', unsupported packages:');
              unsupportedPackages.forEach(function (pkg) {
                console.log(_chalk2.default.red(pkg.name + '@' + pkg.version));
              });
            });
            return _context.abrupt('return', true);

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function checkForUpdate(_x) {
    return _ref.apply(this, arguments);
  }

  return checkForUpdate;
}();