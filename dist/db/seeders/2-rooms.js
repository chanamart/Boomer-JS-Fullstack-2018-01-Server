'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  up: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(queryInterface) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryInterface.bulkInsert('rooms', [{ hot_potatoe: "potatoe.png", background: "back.png", level: Math.floor(Math.random() * Math.floor(8)) }, { hot_potatoe: "potatoe.png", background: "back.png", level: Math.floor(Math.random() * Math.floor(8)) }, { hot_potatoe: "potatoe.png", background: "back.png", level: Math.floor(Math.random() * Math.floor(8)) }, { hot_potatoe: "potatoe.png", background: "back.png", level: Math.floor(Math.random() * Math.floor(8)) }], {});

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function up(_x) {
      return _ref.apply(this, arguments);
    };
  }(),

  down: function down(queryInterface, Sequelize) {}
};