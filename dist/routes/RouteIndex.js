'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

var _Route2 = require('./Route');

var _Route3 = _interopRequireDefault(_Route2);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var RouteIndex = (_dec = _Route3.default.Route({
  routeBase: ''
}), _dec2 = _Route3.default.Get({
  path: 'user/:pseudo'
}), _dec3 = _Route3.default.Get({
  path: 'top'
}), _dec(_class = (_class2 = function (_Route) {
  (0, _inherits3.default)(RouteIndex, _Route);

  function RouteIndex(params) {
    (0, _classCallCheck3.default)(this, RouteIndex);
    return (0, _possibleConstructorReturn3.default)(this, (RouteIndex.__proto__ || (0, _getPrototypeOf2.default)(RouteIndex)).call(this, (0, _extends3.default)({}, params, { model: 'users' })));
  }

  (0, _createClass3.default)(RouteIndex, [{
    key: 'user',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        var user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.model.findOne({ where: { pseudo: ctx.params.pseudo }, attributes: ['id', 'pseudo', 'defeat', 'score', 'rank'] });

              case 2:
                user = _context.sent;

                this.sendOk(ctx, user);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function user(_x) {
        return _ref.apply(this, arguments);
      }

      return user;
    }()
  }, {
    key: 'top',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx) {
        var Sequelize, op, top, index;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Sequelize = require('sequelize');
                op = Sequelize.Op;
                _context2.next = 4;
                return this.model.findAll({ limit: 5, order: [['score', 'DESC']], where: { score: (0, _defineProperty3.default)({}, op.gt, 0) }, attributes: ['id', 'pseudo', 'score'] });

              case 4:
                top = _context2.sent;


                for (index = 0; index < top.length; index++) {
                  top[index].dataValues.rank = index + 1;
                }
                console.log(top);
                this.sendOk(ctx, top);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function top(_x2) {
        return _ref2.apply(this, arguments);
      }

      return top;
    }()
  }]);
  return RouteIndex;
}(_Route3.default), (_applyDecoratedDescriptor(_class2.prototype, 'user', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'user'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'top', [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'top'), _class2.prototype)), _class2)) || _class);
exports.default = RouteIndex;