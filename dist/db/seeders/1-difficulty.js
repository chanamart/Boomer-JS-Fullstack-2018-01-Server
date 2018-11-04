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
              return queryInterface.bulkInsert('difficulties', [{
                multiplier: 1,
                loss: 1,
                click_nbr: 30,
                hard: false,
                title: "Easy",
                background: "https://orig00.deviantart.net/f5b6/f/2013/292/6/9/epoch_by_caephuier-d6r3nag.png",
                description: "This is an easy room, for frightened little girls.\nYou will get a smaller amount of points and won't lose much when the room blows."
              }, {
                multiplier: 2,
                loss: 2,
                click_nbr: 20,
                hard: false,
                title: "Medium",
                background: "https://www.wallpaperup.com/uploads/wallpapers/2015/11/05/829280/fb5029f42388487a229175ef9f9bb97a.jpg",
                description: "This is a medium room, practice and get better.\nYou will get a nice amount of points and will lose a bit more than in easy."
              }, {
                multiplier: 3,
                loss: 3,
                click_nbr: 20,
                hard: true,
                title: "Hard",
                background: "https://pbs.twimg.com/media/DRd9ThiXkAAUjxX.jpg:large",
                description: "This is a hard room, the challenge begins.\nYou will get a large amount of points and will lose half of it."
              }, {
                multiplier: 4,
                loss: 4,
                click_nbr: 15,
                hard: true,
                title: "Evil",
                background: "https://images7.alphacoders.com/528/528418.jpg",
                description: "This is an evil room, you'll die after the first click.\nYou will get an enormous amount of points and will lose everything."
              }, {
                multiplier: 1,
                loss: 1,
                click_nbr: 35,
                hard: false,
                title: "Easy",
                background: "https://cdna.artstation.com/p/assets/images/images/003/052/182/large/todor-hristov-2.jpg?1469028977",
                description: "This is an easy room, for frightened little girls.\nYou will get a smaller amount of points and won't lose much when the room blows."
              }, {
                multiplier: 2,
                loss: 2,
                click_nbr: 25,
                hard: false,
                title: "Medium",
                background: "https://steamusercontent-a.akamaihd.net/ugc/925926525727156292/1F08870D3FCA29ED959BE10348AA4CECB06879D5/",
                description: "This is a medium room, practice and get better.\nYou will get a nice amount of points and will lose a bit more than in easy."
              }, {
                multiplier: 3,
                loss: 3,
                click_nbr: 15,
                hard: true,
                title: "Hard",
                background: "https://i.gifer.com/RQnj.gif",
                description: "This is a hard room, the challenge begins.\nYou will get a large amount of points and will lose half of it."
              }, {
                multiplier: 4,
                loss: 4,
                click_nbr: 10,
                hard: true,
                title: "Evil",
                background: "https://media.giphy.com/media/MWL7evUUaBvzi/giphy.gif",
                description: "This is an evil room, you'll die after the first click.\nYou will get an enormous amount of points and will lose everything."
              }], {});

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

  down: function down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
        Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};