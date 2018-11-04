'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('rooms', [
      { hot_potatoe: "potatoe.png", background: "back.png", level: (Math.floor(Math.random() * Math.floor(8)) + 1) },
      { hot_potatoe: "potatoe.png", background: "back.png", level: (Math.floor(Math.random() * Math.floor(8)) + 1) },
      { hot_potatoe: "potatoe.png", background: "back.png", level: (Math.floor(Math.random() * Math.floor(8)) + 1) },
      { hot_potatoe: "potatoe.png", background: "back.png", level: (Math.floor(Math.random() * Math.floor(8)) + 1) },
    ], {});
  },


  down: (queryInterface, Sequelize) => {
  }
};
