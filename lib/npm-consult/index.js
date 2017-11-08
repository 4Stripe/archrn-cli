'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _utils = require('./utils');

var _checkForUpdate = require('./actions/checkForUpdate');

var _checkForUpdate2 = _interopRequireDefault(_checkForUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var _ref2, action, packageDefinition;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _inquirer2.default.prompt([{
              type: 'list',
              choices: [{
                name: 'update (Update a package to the most feasible version)',
                value: 'update'
              }],
              name: 'action',
              message: 'What do you want to do?'
            }]);

          case 2:
            _ref2 = _context.sent;
            action = _ref2.action;
            _context.next = 6;
            return (0, _utils.loadPkgJSON)('package.json');

          case 6:
            packageDefinition = _context.sent;
            _context.t0 = action;
            _context.next = _context.t0 === 'update' ? 10 : 13;
            break;

          case 10:
            _context.next = 12;
            return (0, _checkForUpdate2.default)(packageDefinition);

          case 12:
            return _context.abrupt('break', 15);

          case 13:
            console.log('there isn\'t any command with the name ' + action + ', dude. \uD83D\uDE14');
            return _context.abrupt('break', 15);

          case 15:
            return _context.abrupt('return', true);

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function init() {
    return _ref.apply(this, arguments);
  }

  return init;
}();