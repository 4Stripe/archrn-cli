'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPkgJSON = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var loadPkgJSON = exports.loadPkgJSON = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(fileName) {
    var pkgJSONFile, rawPkgJson;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pkgJSONFile = _path2.default.join(process.env.PWD, fileName);
            _context.prev = 1;
            _context.next = 4;
            return readFileAsync(pkgJSONFile);

          case 4:
            rawPkgJson = _context.sent;
            return _context.abrupt('return', JSON.parse(rawPkgJson.toString('utf-8')));

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            console.log(_context.t0.message);
            return _context.abrupt('return', null);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));

  return function loadPkgJSON(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.noop = noop;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readFileAsync = _bluebird2.default.promisify(_fs2.default.readFile);

function noop() {}