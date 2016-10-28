'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.describeTable('reservations').then(attributes => {
      if ( attributes.roomId ) {
        return queryInterface.removeColumn('reservations', 'roomId');
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
